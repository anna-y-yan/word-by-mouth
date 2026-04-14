const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'recipes.db'));

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS recipes (
    id              INTEGER PRIMARY KEY,
    title           TEXT    NOT NULL,
    source          TEXT,
    source_url      TEXT    UNIQUE,
    author          TEXT    DEFAULT 'You',
    author_initials TEXT    DEFAULT 'YO',
    is_friend       INTEGER DEFAULT 0,
    time            TEXT,
    rating          REAL    DEFAULT 0,
    reviews         INTEGER DEFAULT 0,
    tags            TEXT    DEFAULT '[]',
    ingredients     TEXT    DEFAULT '[]',
    instructions    TEXT    DEFAULT '[]',
    photos          TEXT    DEFAULT '[]',
    status          TEXT,
    created_at      INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS comments (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    recipe_id   INTEGER NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    author      TEXT    NOT NULL,
    initials    TEXT    NOT NULL,
    text        TEXT    NOT NULL,
    rating      INTEGER DEFAULT 0,
    created_at  INTEGER DEFAULT (unixepoch())
  );
`);

module.exports = db;
