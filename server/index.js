const express = require('express');
const path = require('path');
const seed = require('./seed');
const recipesRouter = require('./routes/recipes');

const app = express();
const PORT = process.env.PORT || 3000;

seed();

// 10 mb limit to accommodate base64-encoded photos
app.use(express.json({ limit: '10mb' }));

// Serve the frontend from the project root
app.use(express.static(path.join(__dirname, '..')));

app.use('/api/recipes', recipesRouter);

// Catch-all: serve index.html for any non-API route
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Word by Mouth running at http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nPort ${PORT} is already in use. To fix:\n  pkill -f "node server/index.js"\nThen run npm start again.\n`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
