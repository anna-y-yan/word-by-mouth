const express = require('express');
const db = require('../db');

const router = express.Router();

// Normalize a recipe URL to a stable dedup key (hostname + pathname, lowercased)
function normalizeUrl(url) {
  try {
    const u = new URL(url);
    return (u.hostname + u.pathname).toLowerCase().replace(/\/$/, '');
  } catch {
    return url.toLowerCase();
  }
}

// Convert a DB row into the shape the frontend expects
function toRecipe(row, comments = []) {
  return {
    id:             row.id,
    title:          row.title,
    source:         row.source,
    sourceUrl:      row.source_url,
    author:         row.author,
    authorInitials: row.author_initials,
    isFriend:       row.is_friend === 1,
    time:           row.time,
    rating:         row.rating,
    reviews:        row.reviews,
    tags:           JSON.parse(row.tags        || '[]'),
    ingredients:    JSON.parse(row.ingredients || '[]'),
    instructions:   JSON.parse(row.instructions|| '[]'),
    photos:         JSON.parse(row.photos      || '[]'),
    status:         row.status,
    createdAt:      row.created_at,
    comments,
  };
}

const getComments = db.prepare(
  'SELECT * FROM comments WHERE recipe_id = ? ORDER BY created_at DESC'
);

// ── GET /api/recipes ──────────────────────────────────────────────────────────
router.get('/', (_req, res) => {
  const rows = db.prepare('SELECT * FROM recipes ORDER BY created_at DESC').all();
  const recipes = rows.map(row => toRecipe(row, getComments.all(row.id)));
  res.json(recipes);
});

// ── GET /api/recipes/:id ──────────────────────────────────────────────────────
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Recipe not found' });
  res.json(toRecipe(row, getComments.all(row.id)));
});

// ── POST /api/recipes ─────────────────────────────────────────────────────────
router.post('/', (req, res) => {
  const {
    id, title, source, sourceUrl, author, authorInitials, isFriend,
    time, rating, reviews, tags, ingredients, instructions, photos,
    status, comment,
  } = req.body;

  if (!title) return res.status(400).json({ error: 'title is required' });

  // Server-side dedup: check normalized URL before attempting insert
  if (sourceUrl) {
    const key = normalizeUrl(sourceUrl);
    const existing = db.prepare('SELECT * FROM recipes').all()
      .find(r => r.source_url && normalizeUrl(r.source_url) === key);

    if (existing) {
      // Attach the incoming review to the existing recipe
      if (comment) {
        addComment(existing.id, comment);
        recalcRating(existing.id);
      }
      const refreshed = db.prepare('SELECT * FROM recipes WHERE id = ?').get(existing.id);
      return res.status(409).json({ existing: toRecipe(refreshed, getComments.all(existing.id)) });
    }
  }

  try {
    db.prepare(`
      INSERT INTO recipes
        (id, title, source, source_url, author, author_initials, is_friend,
         time, rating, reviews, tags, ingredients, instructions, photos, status)
      VALUES
        (@id, @title, @source, @sourceUrl, @author, @authorInitials, @isFriend,
         @time, @rating, @reviews, @tags, @ingredients, @instructions, @photos, @status)
    `).run({
      id:             id   ?? null,
      title,
      source:         source         ?? null,
      sourceUrl:      sourceUrl      ?? null,
      author:         author         ?? 'You',
      authorInitials: authorInitials ?? 'YO',
      isFriend:       isFriend ? 1 : 0,
      time:           time     ?? null,
      rating:         rating   ?? 0,
      reviews:        reviews  ?? 0,
      tags:           JSON.stringify(tags         || []),
      ingredients:    JSON.stringify(ingredients  || []),
      instructions:   JSON.stringify(instructions || []),
      photos:         JSON.stringify(photos       || []),
      status:         status   ?? null,
    });

    const savedId = id ?? db.prepare('SELECT last_insert_rowid() as id').get().id;

    // Attach initial review if "already cooked"
    if (comment) {
      addComment(savedId, comment);
      recalcRating(savedId);
    }

    const saved = db.prepare('SELECT * FROM recipes WHERE id = ?').get(savedId);
    res.status(201).json(toRecipe(saved, getComments.all(savedId)));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ── POST /api/recipes/:id/comments ───────────────────────────────────────────
router.post('/:id/comments', (req, res) => {
  const row = db.prepare('SELECT id FROM recipes WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Recipe not found' });

  addComment(req.params.id, req.body);
  if ((req.body.rating ?? 0) > 0) recalcRating(req.params.id);

  const updated = db.prepare('SELECT * FROM recipes WHERE id = ?').get(req.params.id);
  res.status(201).json(toRecipe(updated, getComments.all(req.params.id)));
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function addComment(recipeId, { author, initials, text, rating } = {}) {
  db.prepare(`
    INSERT INTO comments (recipe_id, author, initials, text, rating)
    VALUES (?, ?, ?, ?, ?)
  `).run(recipeId, author ?? 'You', initials ?? 'YO', text ?? '', rating ?? 0);
}

function recalcRating(recipeId) {
  const { avg, cnt } = db.prepare(`
    SELECT ROUND(AVG(CAST(rating AS REAL)), 1) as avg, COUNT(*) as cnt
    FROM comments WHERE recipe_id = ? AND rating > 0
  `).get(recipeId);

  db.prepare('UPDATE recipes SET rating = ?, reviews = ? WHERE id = ?')
    .run(avg ?? 0, cnt ?? 0, recipeId);
}

module.exports = router;
