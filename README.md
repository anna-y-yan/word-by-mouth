# Word by Mouth

A social recipe discovery app where you can save, share, and discover recipes with friends.

## Features

- **Recipe Feed** — Browse recipes shared by friends, filter by trending or saved
- **Recipe Books** — Organize recipes into themed collections (Weeknight Dinners, Comfort Food, etc.)
- **Friend Activity** — See what your friends are cooking and read their reviews
- **URL Import** — Paste a link from any recipe site to import ingredients and instructions automatically
- **Photo Upload** — Attach your own photos to recipes with drag-and-drop support
- **Personalized Suggestions** — AI-powered chips based on your saved recipes and friend activity

## Project Structure

```
word-by-mouth/
├── index.html        # App shell and HTML structure
├── css/
│   └── styles.css    # All styles
├── js/
│   └── app.js        # Recipe data, rendering, filtering, and modal logic
└── README.md
```

## Getting Started

No build step required — this is a plain HTML/CSS/JS project.

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/word-by-mouth.git
   cd word-by-mouth
   ```

2. Open `index.html` in your browser, or serve it locally:
   ```bash
   # Python
   python3 -m http.server 8000

   # Node (npx)
   npx serve .
   ```

3. Visit `http://localhost:8000`

## Roadmap

- [ ] Backend API for persistent recipe storage
- [ ] Real URL scraping / recipe import
- [ ] User authentication and friend connections
- [ ] Image hosting for uploaded photos
- [ ] Push notifications for friend activity
