# Word by Mouth

A social recipe discovery app where you can import, save, and share recipes with friends.

## Features

- **Recipe Feed** — Browse recipes shared by friends with large photos and notes as the focal point
- **URL Import** — Paste a link from any major recipe site (NYT Cooking, AllRecipes, Epicurious, Bon Appétit, etc.) to automatically extract the title, ingredients, instructions, and cook time via JSON-LD structured data
- **Want to Try / Already Cooked** — Tag imported recipes with your status; add a star rating and notes when you mark a recipe as cooked
- **Deduplication** — If a URL has already been imported, your review is attached to the existing recipe rather than creating a duplicate
- **Source Attribution** — Recipes display the site they came from (e.g. "NYT Cooking", "Serious Eats") as a subtitle
- **Photo Upload** — Attach your own photos to recipes with drag-and-drop support; the first photo becomes the feed card cover
- **Profile Page** — View your posts, want-to-try list, top-rated recipes, and cook books in one place
- **Cook Books** — Browse recipes organized into themed collections (Weeknight Dinners, Comfort Food, Healthy Favorites, Desserts)
- **Persistent Storage** — All recipes and reviews are stored in a SQLite database via a REST API

## Project Structure

```
word-by-mouth/
├── index.html           # App shell and HTML structure
├── css/
│   └── styles.css       # All styles
├── js/
│   └── app.js           # Rendering, filtering, import, and profile logic
├── assets/
│   └── wordofmouth1.png # Logo
├── server/
│   ├── index.js         # Express app entry point
│   ├── db.js            # SQLite connection and schema
│   ├── seed.js          # Initial recipe data (runs once on first start)
│   └── routes/
│       └── recipes.js   # REST API routes
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

For development with auto-reload:

```bash
npm run dev
```

### Stopping the server

Press `Ctrl+C` in the terminal. If you ever see a "port already in use" error:

```bash
pkill -f "node server/index.js"
```

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/recipes` | All recipes with comments, newest first |
| GET | `/api/recipes/:id` | Single recipe by ID |
| POST | `/api/recipes` | Create a recipe (returns 409 with existing recipe if URL is a duplicate) |
| POST | `/api/recipes/:id/comments` | Add a review to a recipe; recalculates average rating |

## Roadmap

- [ ] User authentication and friend connections
- [ ] Image hosting for uploaded photos (currently stored as base64)
- [ ] Push notifications for friend activity
- [ ] Discover and Friends views
