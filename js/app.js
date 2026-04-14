// ── Recipe Data ───────────────────────────────────────────────────────────────
// Populated from the API on load; seed data lives in server/seed.js

let recipes = [];

// (dead code start — kept for reference; remove once API is confirmed working)
const _unusedSeedRef = [
  {
    id: 1,
    title: 'Creamy Tuscan Chicken',
    author: 'Sarah Kim',
    authorInitials: 'SK',
    isFriend: true,
    time: '35 min',
    rating: 4.8,
    reviews: 124,
    tags: ['weeknight', 'comfort'],
    ingredients: [
      '4 chicken breasts',
      '2 cups heavy cream',
      '1 cup sun-dried tomatoes',
      '3 cups fresh spinach',
      '4 cloves garlic, minced',
      '1/2 cup parmesan cheese',
    ],
    instructions: [
      'Season chicken breasts with salt, pepper, and Italian seasoning. Heat oil in a large skillet over medium-high heat.',
      'Cook chicken for 6–7 minutes per side until golden brown and cooked through. Remove and set aside.',
      'In the same pan, sauté garlic until fragrant, about 1 minute.',
      'Add sun-dried tomatoes and cook for 2 minutes.',
      'Pour in heavy cream and bring to a simmer. Add parmesan cheese and stir until melted.',
      'Add spinach and cook until wilted, about 2 minutes.',
      'Return chicken to the pan and simmer for 3–4 minutes until sauce thickens. Serve hot.',
    ],
    comments: [
      { author: 'Mike Chen', initials: 'MC', text: 'Made this last night and it was incredible! The sauce is so rich and flavorful.', rating: 5 },
      { author: 'Emma Johnson', initials: 'EJ', text: 'Perfect comfort food. I added mushrooms and it was even better!', rating: 5 },
    ],
  },
  {
    id: 2,
    title: 'Spicy Korean Beef Bowl',
    author: 'Mike Chen',
    authorInitials: 'MC',
    isFriend: true,
    time: '25 min',
    rating: 4.6,
    reviews: 89,
    tags: ['weeknight', 'healthy'],
    ingredients: [
      '1 lb ground beef',
      '3 tbsp gochujang',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '4 cups cooked rice',
      '2 cups kimchi',
      '4 fried eggs',
      'Green onions for garnish',
    ],
    instructions: [
      'Cook ground beef in a large skillet over medium-high heat, breaking it apart as it cooks.',
      'Once beef is browned, drain excess fat.',
      'Add gochujang, soy sauce, sesame oil, minced garlic, and a pinch of sugar. Stir well to combine.',
      'Cook for 2–3 minutes until sauce is heated through and beef is well coated.',
      'Divide rice among bowls and top with spicy beef.',
      'Add kimchi on the side and top each bowl with a fried egg.',
      'Garnish with sliced green onions and sesame seeds. Serve immediately.',
    ],
    comments: [
      { author: 'Sarah Kim', initials: 'SK', text: 'This has become my go-to weeknight dinner! So quick and satisfying.', rating: 5 },
    ],
  },
  {
    id: 3,
    title: 'Classic Margherita Pizza',
    author: 'Emma Johnson',
    authorInitials: 'EJ',
    isFriend: true,
    time: '45 min',
    rating: 4.9,
    reviews: 203,
    tags: ['comfort'],
    ingredients: [
      '1 lb pizza dough',
      '1 cup tomato sauce',
      '8 oz fresh mozzarella',
      'Fresh basil leaves',
      '2 tbsp olive oil',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Preheat oven to 475°F (245°C). If using a pizza stone, place it in the oven to heat.',
      'Roll out pizza dough on a floured surface to about 12 inches in diameter.',
      'Spread tomato sauce evenly over the dough, leaving a 1-inch border.',
      'Tear fresh mozzarella into pieces and distribute over the sauce.',
      'Drizzle with olive oil and season with salt and pepper.',
      'Transfer to pizza stone or baking sheet and bake for 12–15 minutes until crust is golden and cheese is bubbly.',
      'Remove from oven, top with fresh basil leaves, and let cool for 2 minutes before slicing.',
    ],
    comments: [
      { author: 'Mike Chen', initials: 'MC', text: 'Restaurant quality! The crust came out perfect.', rating: 5 },
    ],
  },
  {
    id: 4,
    title: 'Buddha Bowl',
    author: 'Sarah Kim',
    authorInitials: 'SK',
    isFriend: true,
    time: '30 min',
    rating: 4.7,
    reviews: 156,
    tags: ['healthy'],
    ingredients: [
      '2 cups cooked quinoa',
      '1 can chickpeas, roasted',
      '2 cups kale, massaged',
      '1 avocado, sliced',
      '1 cup shredded carrots',
      '1/2 cup tahini dressing',
    ],
    instructions: [
      'Preheat oven to 400°F. Drain and rinse chickpeas, pat dry.',
      'Toss chickpeas with olive oil, paprika, cumin, salt, and pepper.',
      'Roast chickpeas for 20–25 minutes until crispy, shaking pan halfway through.',
      'While chickpeas roast, massage kale with a bit of olive oil and lemon juice until softened.',
      'Prepare tahini dressing by mixing tahini, lemon juice, garlic, and water until smooth.',
      'Divide quinoa among bowls and arrange chickpeas, kale, carrots, and avocado on top.',
      'Drizzle with tahini dressing and serve.',
    ],
    comments: [],
  },
  {
    id: 5,
    title: 'Chocolate Lava Cakes',
    author: 'Emma Johnson',
    authorInitials: 'EJ',
    isFriend: true,
    time: '20 min',
    rating: 5.0,
    reviews: 287,
    tags: ['desserts'],
    ingredients: [
      '6 oz dark chocolate',
      '6 tbsp butter',
      '2 eggs',
      '2 egg yolks',
      '1/4 cup sugar',
      '2 tbsp flour',
    ],
    instructions: [
      'Preheat oven to 425°F. Butter and flour four ramekins.',
      'Melt chocolate and butter together in a microwave-safe bowl, stirring every 30 seconds.',
      'In a separate bowl, whisk together eggs, egg yolks, and sugar until thick and pale.',
      'Fold melted chocolate into egg mixture.',
      'Gently fold in flour until just combined.',
      'Divide batter among prepared ramekins.',
      'Bake for 12–14 minutes until edges are firm but center is still soft. Let cool for 1 minute, then invert onto plates and serve immediately.',
    ],
    comments: [
      { author: 'Sarah Kim', initials: 'SK', text: 'These are INCREDIBLE. The molten center is perfection!', rating: 5 },
      { author: 'Mike Chen', initials: 'MC', text: 'Impressed my date night guests. Will make again!', rating: 5 },
    ],
  },
  {
    id: 6,
    title: 'Thai Green Curry',
    author: 'Mike Chen',
    authorInitials: 'MC',
    isFriend: true,
    time: '40 min',
    rating: 4.8,
    reviews: 142,
    tags: ['weeknight'],
    ingredients: [
      '2 tbsp green curry paste',
      '1 can coconut milk',
      '1 lb chicken, cubed',
      '1 cup bamboo shoots',
      '1 cup Thai basil',
      '2 tbsp fish sauce',
      '1 tbsp palm sugar',
    ],
    instructions: [
      'Heat oil in a wok or large pan over medium-high heat.',
      'Add green curry paste and fry for 1–2 minutes until fragrant.',
      'Pour in half the coconut milk and stir to combine with curry paste.',
      'Add chicken and cook until no longer pink, about 5 minutes.',
      'Add remaining coconut milk, bamboo shoots, fish sauce, and palm sugar.',
      'Simmer for 15 minutes until chicken is cooked through and sauce has thickened.',
      'Stir in Thai basil just before serving. Serve over jasmine rice.',
    ],
    comments: [],
  },
];
// (dead code end)

// ── Cook Books ────────────────────────────────────────────────────────────────

const COOK_BOOKS = [
  { id: 'weeknight', name: 'Weeknight Dinners', icon: 'WN', color: '#7A9E7E' },
  { id: 'comfort',   name: 'Comfort Food',      icon: 'CF', color: '#C4876A' },
  { id: 'healthy',   name: 'Healthy Favorites',  icon: 'HF', color: '#6A9EA8' },
  { id: 'desserts',  name: 'Desserts',            icon: 'DS', color: '#C4A068' },
];

// ── State ─────────────────────────────────────────────────────────────────────

let uploadedPhotos = [];
let importedRecipe = null;

// ── Render ────────────────────────────────────────────────────────────────────

function getPlaceholderColor(title) {
  const palette = ['#A8705C', '#6A9478', '#B08B5A', '#7A6EA0', '#5A8DA8', '#A86878', '#6A9268', '#9E7A58'];
  let hash = 0;
  for (let i = 0; i < title.length; i++) hash = (hash << 5) - hash + title.charCodeAt(i);
  return palette[Math.abs(hash) % palette.length];
}

function feedCardHtml(recipe) {
  const topComment = recipe.comments[0] || null;
  const photoUrl = recipe.photos && recipe.photos.length > 0 ? recipe.photos[0] : null;
  const placeholderColor = getPlaceholderColor(recipe.title);

  return `
    <div class="feed-card" onclick="openRecipeDetail(${recipe.id})">

      <div class="feed-card-header">
        <div class="author-avatar">${recipe.authorInitials}</div>
        <div class="author-info">
          <div class="author-name">
            ${recipe.author}
            ${recipe.isFriend ? '<span class="friend-tag">Friend</span>' : ''}
          </div>
          <div class="feed-card-tags">
            ${recipe.status === 'wantToTry' ? '<span class="status-tag want">Want to Try</span>' : ''}
            ${recipe.status === 'alreadyCooked' ? '<span class="status-tag cooked">Cooked</span>' : ''}
          </div>
        </div>
        ${recipe.source ? `<span class="recipe-source-tag">${recipe.source}</span>` : ''}
      </div>

      <div class="feed-photo" style="${!photoUrl ? `background-color: ${placeholderColor};` : ''}">
        ${photoUrl
          ? `<img src="${photoUrl}" class="feed-photo-img" alt="${recipe.title}">`
          : `<span class="feed-photo-placeholder-text">${recipe.title}</span>`
        }
      </div>

      <div class="feed-card-body">
        <div class="feed-title-row">
          <h3 class="feed-recipe-title">${recipe.title}</h3>
          <div class="feed-recipe-meta">
            ${recipe.time && recipe.time !== 'N/A' ? `<span class="meta-item">${recipe.time}</span>` : ''}
            ${recipe.rating > 0 ? `<span class="rating-display"><span class="star">★</span><span class="rating-text">${recipe.rating}</span></span>` : ''}
          </div>
        </div>

        ${topComment ? `
          <div class="feed-note">
            <p class="feed-note-text">"${topComment.text}"</p>
            <div class="feed-note-footer">
              ${topComment.rating > 0 ? `<span class="feed-note-stars">${'★'.repeat(topComment.rating)}</span>` : ''}
              <span class="feed-note-author">— ${topComment.author}</span>
            </div>
          </div>
        ` : ''}
      </div>

    </div>
  `;
}

function renderRecipes(recipesToShow = recipes) {
  document.getElementById('recipeGrid').innerHTML = recipesToShow.map(feedCardHtml).join('');
}

// ── Recipe Detail Modal ───────────────────────────────────────────────────────

function openRecipeDetail(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  document.getElementById('modalTitle').textContent = recipe.title;
  document.getElementById('modalSubtitle').textContent = recipe.source || '';
  document.getElementById('modalBody').innerHTML = `
    <div class="recipe-detail-image"></div>

    <div class="recipe-author" style="margin-bottom: 16px;">
      <div class="author-avatar" style="width: 40px; height: 40px; font-size: 16px;">${recipe.authorInitials}</div>
      <div class="author-info">
        <div class="author-name">${recipe.author}</div>
        <div class="recipe-meta">
          <div class="meta-item">${recipe.time}</div>
          <div class="rating-display">
            <span class="star">★</span>
            <span class="rating-text">${recipe.rating}</span>
            <span style="color: #A89A8E; margin-left: 4px;">(${recipe.reviews} reviews)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h4>Ingredients</h4>
      <ul class="ingredients-list">
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-section">
      <h4>Instructions</h4>
      <ol class="instructions-list">
        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>

    <div class="action-buttons">
      <button class="action-btn primary">Save to Recipe Book</button>
      <button class="action-btn">Share with Friends</button>
      <button class="action-btn">Rate Recipe</button>
    </div>

    ${recipe.comments.length > 0 ? `
      <div class="comments-section">
        <h4>Reviews from Friends</h4>
        ${recipe.comments.map(comment => `
          <div class="comment">
            <div class="comment-avatar">${comment.initials}</div>
            <div class="comment-content">
              <div class="comment-author">${comment.author}</div>
              <div class="comment-text">${comment.text}</div>
              <div class="comment-rating">
                <div class="rating-display">
                  ${'<span class="star">★</span>'.repeat(comment.rating)}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;

  document.getElementById('recipeModal').classList.add('active');
}

// ── Add Recipe Modal ──────────────────────────────────────────────────────────

function openAddRecipe() {
  uploadedPhotos = [];
  importedRecipe = null;

  document.getElementById('modalTitle').textContent = 'Add Recipe';
  document.getElementById('modalSubtitle').textContent = '';
  document.getElementById('modalBody').innerHTML = `
    <div class="upload-section">
      <h4>Import from URL</h4>
      <div class="url-input-group">
        <input
          type="text"
          class="url-input"
          id="recipeUrl"
          placeholder="Paste recipe URL (e.g., from NYT Cooking, Bon Appétit, etc.)"
        />
        <button class="import-btn" onclick="importRecipe()">Import</button>
      </div>
      <p style="font-size: 12px; color: #A89A8E; margin-top: 8px;">
        We'll automatically extract the recipe title, ingredients, and instructions
      </p>
    </div>

    <div class="divider"></div>

    <div class="upload-section">
      <h4>Add Your Photos</h4>
      <input type="file" id="photoInput" accept="image/*" multiple style="display: none;" onchange="handlePhotoSelect(event)">
      <div class="photo-upload-area" onclick="document.getElementById('photoInput').click()">
        <div class="upload-icon">+</div>
        <div class="upload-text">Click to upload photos</div>
        <div class="upload-hint">or drag and drop</div>
      </div>
      <div class="photo-preview" id="photoPreview"></div>
    </div>

    <div id="loadingArea"></div>
    <div id="recipePreviewArea"></div>

    <div class="action-buttons">
      <button class="action-btn" onclick="closeModal()">Cancel</button>
      <button class="action-btn primary" id="saveRecipeBtn" disabled onclick="saveImportedRecipe()">Save Recipe</button>
    </div>
  `;

  // Drag-and-drop handlers
  const uploadArea = document.querySelector('.photo-upload-area');

  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    handlePhotoFiles(e.dataTransfer.files);
  });

  document.getElementById('recipeModal').classList.add('active');
}

// ── Photo Handling ────────────────────────────────────────────────────────────

function handlePhotoSelect(event) {
  handlePhotoFiles(event.target.files);
}

function handlePhotoFiles(files) {
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedPhotos.push({ file, url: e.target.result });
      renderPhotoPreview();
    };
    reader.readAsDataURL(file);
  });
}

function renderPhotoPreview() {
  const preview = document.getElementById('photoPreview');
  preview.innerHTML = uploadedPhotos.map((photo, index) => `
    <div class="photo-preview-item">
      <img src="${photo.url}" class="photo-preview-img" alt="Upload preview">
      <button class="photo-remove" onclick="removePhoto(${index})">&times;</button>
    </div>
  `).join('');
}

function removePhoto(index) {
  uploadedPhotos.splice(index, 1);
  renderPhotoPreview();
}

// ── URL Import ────────────────────────────────────────────────────────────────

function normalizeRecipeUrl(url) {
  try {
    const u = new URL(url);
    return (u.hostname + u.pathname).toLowerCase().replace(/\/$/, '');
  } catch (_) {
    return url.toLowerCase();
  }
}

function urlToId(url) {
  const s = normalizeRecipeUrl(url);
  let hash = 5381;
  for (let i = 0; i < s.length; i++) {
    hash = (((hash << 5) + hash) ^ s.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function getSourceName(hostname, schemaPublisher) {
  if (schemaPublisher) return schemaPublisher;
  const map = {
    'cooking.nytimes.com': 'NYT Cooking',
    'nytimes.com': 'NYT Cooking',
    'allrecipes.com': 'AllRecipes',
    'seriouseats.com': 'Serious Eats',
    'bonappetit.com': 'Bon Appétit',
    'epicurious.com': 'Epicurious',
    'foodnetwork.com': 'Food Network',
    'bromabakery.com': 'Broma Bakery',
    'smittenkitchen.com': 'Smitten Kitchen',
    'thekitchn.com': 'The Kitchn',
    'food52.com': 'Food52',
    'delish.com': 'Delish',
    'tasty.co': 'Tasty',
    'halfbakedharvest.com': 'Half Baked Harvest',
    'minimalistbaker.com': 'Minimalist Baker',
    'cookieandkate.com': 'Cookie and Kate',
    'sallysbakingaddiction.com': "Sally's Baking Addiction",
  };
  const h = hostname.replace(/^www\./, '');
  if (map[h]) return map[h];
  const name = h.split('.')[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
}

async function importRecipe() {
  const url = document.getElementById('recipeUrl').value.trim();

  if (!url) {
    alert('Please enter a recipe URL');
    return;
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch (_) {
    alert('Please enter a valid URL (include https://)');
    return;
  }

  const importBtn = document.querySelector('.import-btn');
  importBtn.disabled = true;

  const loadingArea = document.getElementById('loadingArea');
  loadingArea.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <span class="loading-text">Fetching recipe from ${parsedUrl.hostname}...</span>
    </div>
  `;

  document.getElementById('recipePreviewArea').innerHTML = '';
  document.getElementById('saveRecipeBtn').disabled = true;

  try {
    const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);

    if (!response.ok) throw new Error(`Could not reach the page (HTTP ${response.status}).`);

    const html = await response.text();
    const recipe = parseRecipeFromHtml(html);

    if (!recipe) {
      throw new Error(
        `No recipe data found on ${parsedUrl.hostname}. ` +
        `The site may not support automatic import.`
      );
    }

    recipe.sourceUrl = url;
    recipe.source = getSourceName(parsedUrl.hostname, recipe.source);
    importedRecipe = recipe;
    loadingArea.innerHTML = '';

    document.getElementById('recipePreviewArea').innerHTML = `
      <div class="recipe-preview">
        <div class="recipe-preview-header">
          <h5>${importedRecipe.title}</h5>
          <span class="recipe-source-tag">${importedRecipe.source}</span>
        </div>
        ${importedRecipe.time ? `<div class="recipe-preview-meta"><span class="meta-item">${importedRecipe.time}</span></div>` : ''}
        <div class="detail-section">
          <h4>Ingredients</h4>
          <ul class="ingredients-list">
            ${importedRecipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
          </ul>
        </div>
        <div class="detail-section">
          <h4>Instructions</h4>
          <ol class="instructions-list">
            ${importedRecipe.instructions.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      </div>
      <div class="import-status-section">
        <h4>How would you like to save this?</h4>
        <div class="status-toggle">
          <button class="status-btn" id="statusWantToTry" onclick="selectStatus('wantToTry')">Want to Try</button>
          <button class="status-btn" id="statusAlreadyCooked" onclick="selectStatus('alreadyCooked')">Already Cooked</button>
        </div>
        <div id="cookedDetails" class="cooked-details">
          <div class="rating-input-row">
            <span>Your rating:</span>
            <div class="star-input" id="starInput">
              <span onclick="setRating(1)">★</span>
              <span onclick="setRating(2)">★</span>
              <span onclick="setRating(3)">★</span>
              <span onclick="setRating(4)">★</span>
              <span onclick="setRating(5)">★</span>
            </div>
          </div>
          <textarea id="recipeNotes" class="recipe-notes" placeholder="Add notes, substitutions, or tips... (optional)"></textarea>
        </div>
      </div>
    `;
  } catch (err) {
    loadingArea.innerHTML = `
      <div class="import-error">${err.message}</div>
    `;
  } finally {
    importBtn.disabled = false;
  }
}

function parseRecipeFromHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const scripts = doc.querySelectorAll('script[type="application/ld+json"]');

  for (const script of scripts) {
    try {
      const data = JSON.parse(script.textContent);
      const schema = findRecipeSchema(data);
      if (schema) return extractFromSchema(schema);
    } catch (_) {}
  }

  return null;
}

function findRecipeSchema(data) {
  if (!data) return null;

  if (Array.isArray(data)) {
    for (const item of data) {
      const found = findRecipeSchema(item);
      if (found) return found;
    }
    return null;
  }

  if (data['@graph']) return findRecipeSchema(data['@graph']);

  const type = data['@type'];
  if (type === 'Recipe' || (Array.isArray(type) && type.includes('Recipe'))) {
    return data;
  }

  return null;
}

function extractFromSchema(schema) {
  function parseDuration(iso) {
    if (!iso) return null;
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    if (!match) return null;
    const h = parseInt(match[1] || 0);
    const m = parseInt(match[2] || 0);
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h}h`;
    if (m > 0) return `${m} min`;
    return null;
  }

  const ingredients = (schema.recipeIngredient || []).filter(Boolean);

  const instructions = [];
  for (const step of [].concat(schema.recipeInstructions || [])) {
    if (typeof step === 'string') {
      instructions.push(step.trim());
    } else if (step['@type'] === 'HowToSection') {
      for (const s of [].concat(step.itemListElement || [])) {
        const text = typeof s === 'string' ? s : (s.text || s.name || '');
        if (text) instructions.push(text.trim());
      }
    } else {
      const text = step.text || step.name || '';
      if (text) instructions.push(text.trim());
    }
  }

  const time = parseDuration(schema.totalTime)
    || parseDuration(schema.cookTime)
    || parseDuration(schema.prepTime);

  const publisher = schema.publisher?.name
    || (Array.isArray(schema.author) ? schema.author[0]?.name : schema.author?.name)
    || null;

  return {
    title: schema.name || 'Imported Recipe',
    ingredients: ingredients.length ? ingredients : ['No ingredients found'],
    instructions: instructions.length ? instructions : ['No instructions found'],
    time,
    source: publisher,
  };
}

function selectStatus(status) {
  importedRecipe.status = status;

  document.querySelectorAll('.status-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(status === 'wantToTry' ? 'statusWantToTry' : 'statusAlreadyCooked').classList.add('active');

  document.getElementById('cookedDetails').style.display = status === 'alreadyCooked' ? 'block' : 'none';
  document.getElementById('saveRecipeBtn').disabled = false;
}

function setRating(n) {
  importedRecipe.rating = n;
  document.querySelectorAll('#starInput span').forEach((star, i) => {
    star.classList.toggle('active', i < n);
  });
}

// ── Save Imported Recipe ──────────────────────────────────────────────────────

async function saveImportedRecipe() {
  if (!importedRecipe || !importedRecipe.status) return;

  const status = importedRecipe.status;
  const rating = importedRecipe.rating || 0;
  const notes = document.getElementById('recipeNotes')?.value.trim() || '';

  const saveBtn = document.getElementById('saveRecipeBtn');
  saveBtn.disabled = true;
  saveBtn.textContent = 'Saving...';

  const payload = {
    id:             urlToId(importedRecipe.sourceUrl),
    sourceUrl:      importedRecipe.sourceUrl,
    source:         importedRecipe.source,
    title:          importedRecipe.title,
    author:         'You',
    authorInitials: 'YO',
    isFriend:       false,
    time:           importedRecipe.time || null,
    tags:           [],
    photos:         uploadedPhotos.map(p => p.url),
    ingredients:    importedRecipe.ingredients,
    instructions:   importedRecipe.instructions,
    status,
    // Include the review in the same request so the server can attach it atomically
    comment: status === 'alreadyCooked' ? {
      author:   'You',
      initials: 'YO',
      text:     notes || 'Made this recipe!',
      rating,
    } : null,
  };

  try {
    const res = await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.status === 201) {
      // Brand new recipe
      recipes.unshift(data);
      renderRecipes();
      closeModal();
    } else if (res.status === 409) {
      // Duplicate URL — server already attached the review; sync local state
      const idx = recipes.findIndex(r => r.id === data.existing.id);
      if (idx >= 0) {
        recipes[idx] = data.existing;
      } else {
        recipes.unshift(data.existing);
      }
      renderRecipes();
      closeModal();
      openRecipeDetail(data.existing.id);
    } else {
      throw new Error(data.error || 'Failed to save recipe');
    }
  } catch (err) {
    saveBtn.disabled = false;
    saveBtn.textContent = 'Save Recipe';
    alert(`Could not save recipe: ${err.message}`);
  }
}

// ── Modal Helpers ─────────────────────────────────────────────────────────────

function closeModal() {
  document.getElementById('recipeModal').classList.remove('active');
  document.getElementById('modalSubtitle').textContent = '';
}

// Close when clicking the backdrop
document.getElementById('recipeModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// ── Filtering ─────────────────────────────────────────────────────────────────

function filterRecipes(filter) {
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  let filtered = [...recipes];

  if (filter === 'friends') {
    filtered = recipes.filter(r => r.isFriend);
  } else if (filter === 'trending') {
    filtered = [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 4);
  }

  renderRecipes(filtered);
}

function filterByBook(bookType) {
  document.querySelectorAll('.sidebar .recipe-book').forEach(book => book.classList.remove('active'));
  event.target.closest('.recipe-book').classList.add('active');

  const filtered = bookType === 'all' ? recipes : recipes.filter(r => r.tags.includes(bookType));
  renderRecipes(filtered);
}

function filterByFriend(friend) {
  document.querySelectorAll('.sidebar .recipe-book').forEach(book => book.classList.remove('active'));
  event.target.closest('.recipe-book').classList.add('active');

  const friendMap = { sarah: 'Sarah Kim', mike: 'Mike Chen', emma: 'Emma Johnson' };
  renderRecipes(recipes.filter(r => r.author === friendMap[friend]));
}

// ── Navigation ────────────────────────────────────────────────────────────────

function switchView(view) {
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const feedView    = document.getElementById('feedView');
  const profileView = document.getElementById('profileView');

  if (view === 'profile') {
    feedView.style.display    = 'none';
    profileView.style.display = 'block';
    renderProfile();
  } else {
    feedView.style.display    = 'flex';
    profileView.style.display = 'none';
  }
}

// ── Profile Page ──────────────────────────────────────────────────────────────

function renderProfile() {
  const myRecipes  = recipes.filter(r => r.author === 'You');
  const cooked     = recipes.filter(r => r.status === 'alreadyCooked');
  const wantToTry  = recipes.filter(r => r.status === 'wantToTry');

  document.getElementById('profileView').innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar-lg">YO</div>
      <div class="profile-info">
        <h2 class="profile-name">Your Profile</h2>
        <div class="profile-stats">
          <div class="profile-stat">
            <span class="stat-number">${myRecipes.length}</span>
            <span class="stat-label">posts</span>
          </div>
          <div class="profile-stat">
            <span class="stat-number">${cooked.length}</span>
            <span class="stat-label">cooked</span>
          </div>
          <div class="profile-stat">
            <span class="stat-number">${wantToTry.length}</span>
            <span class="stat-label">want to try</span>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-tabs">
      <button class="profile-tab active" data-tab="recent"    onclick="switchProfileTab('recent')">Recent Posts</button>
      <button class="profile-tab"        data-tab="wantToTry" onclick="switchProfileTab('wantToTry')">Want to Try</button>
      <button class="profile-tab"        data-tab="topRated"  onclick="switchProfileTab('topRated')">Top Rated</button>
      <button class="profile-tab"        data-tab="cookBooks" onclick="switchProfileTab('cookBooks')">Cook Books</button>
    </div>

    <div id="profileContent" class="profile-content"></div>
  `;

  switchProfileTab('recent');
}

function switchProfileTab(tab) {
  document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.profile-tab[data-tab="${tab}"]`);
  if (activeTab) activeTab.classList.add('active');

  const content = document.getElementById('profileContent');

  if (tab === 'recent') {
    const mine = recipes.filter(r => r.author === 'You');
    content.innerHTML = mine.length
      ? `<div class="profile-feed">${mine.map(feedCardHtml).join('')}</div>`
      : emptyStateHtml('No posts yet', 'Import your first recipe using the + button to get started.');

  } else if (tab === 'wantToTry') {
    const list = recipes.filter(r => r.status === 'wantToTry');
    content.innerHTML = list.length
      ? `<div class="compact-grid">${list.map(compactCardHtml).join('')}</div>`
      : emptyStateHtml('Nothing saved yet', 'When you import a recipe and mark it "Want to Try", it appears here.');

  } else if (tab === 'topRated') {
    const list = recipes
      .filter(r => r.status === 'alreadyCooked' && r.rating > 0)
      .sort((a, b) => b.rating - a.rating);
    content.innerHTML = list.length
      ? `<div class="profile-feed">${list.map(feedCardHtml).join('')}</div>`
      : emptyStateHtml('No rated recipes yet', 'Cook a recipe and leave a rating to see it here.');

  } else if (tab === 'cookBooks') {
    content.innerHTML = cookBooksHtml();
  }
}

function compactCardHtml(recipe) {
  const photoUrl = recipe.photos && recipe.photos.length > 0 ? recipe.photos[0] : null;
  const color    = getPlaceholderColor(recipe.title);
  return `
    <div class="compact-card" onclick="openRecipeDetail(${recipe.id})">
      <div class="compact-card-photo" style="${!photoUrl ? `background-color: ${color};` : ''}">
        ${photoUrl
          ? `<img src="${photoUrl}" class="compact-card-img" alt="${recipe.title}">`
          : `<span class="compact-card-placeholder">${recipe.title[0]}</span>`
        }
      </div>
      <div class="compact-card-body">
        <h4 class="compact-card-title">${recipe.title}</h4>
        ${recipe.source ? `<span class="recipe-source">${recipe.source}</span>` : ''}
        ${recipe.time && recipe.time !== 'N/A' ? `<span class="compact-card-time">${recipe.time}</span>` : ''}
      </div>
    </div>
  `;
}

function cookBooksHtml(activeBookId = null) {
  const bookCards = COOK_BOOKS.map(book => {
    const count = recipes.filter(r => (r.tags || []).includes(book.id)).length;
    const isActive = book.id === activeBookId;
    return `
      <div class="cook-book-card ${isActive ? 'active' : ''}" onclick="openCookBook('${book.id}')">
        <div class="cook-book-icon" style="background: ${book.color};">${book.icon}</div>
        <div class="cook-book-info">
          <div class="cook-book-name">${book.name}</div>
          <div class="cook-book-count">${count} recipe${count !== 1 ? 's' : ''}</div>
        </div>
      </div>
    `;
  }).join('');

  const bookRecipes = activeBookId
    ? recipes.filter(r => (r.tags || []).includes(activeBookId))
    : [];

  return `
    <div class="cook-books-grid">${bookCards}</div>
    ${activeBookId ? `
      <div class="cook-book-recipes">
        ${bookRecipes.length
          ? `<div class="compact-grid">${bookRecipes.map(compactCardHtml).join('')}</div>`
          : emptyStateHtml('No recipes in this book yet', 'Tag imported recipes to add them here.')
        }
      </div>
    ` : ''}
  `;
}

function openCookBook(bookId) {
  document.getElementById('profileContent').innerHTML = cookBooksHtml(bookId);
}

function emptyStateHtml(title, subtitle) {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">○</div>
      <h3 class="empty-state-title">${title}</h3>
      <p class="empty-state-subtitle">${subtitle}</p>
    </div>
  `;
}

// ── Init ──────────────────────────────────────────────────────────────────────

async function loadRecipes() {
  try {
    const res = await fetch('/api/recipes');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    recipes = await res.json();
  } catch (err) {
    console.error('Failed to load recipes:', err);
  }
  renderRecipes();
}

loadRecipes();
