const db = require('./db');

const seedRecipes = [
  {
    id: 1,
    title: 'Creamy Tuscan Chicken',
    author: 'Sarah Kim',
    authorInitials: 'SK',
    isFriend: true,
    time: '35 min',
    rating: 4.8,
    reviews: 2,
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
    reviews: 1,
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
    reviews: 1,
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
    reviews: 0,
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
    reviews: 2,
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
    reviews: 0,
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

function seed() {
  const { n } = db.prepare('SELECT COUNT(*) as n FROM recipes').get();
  if (n > 0) return;

  const insertRecipe = db.prepare(`
    INSERT INTO recipes
      (id, title, author, author_initials, is_friend, time, rating, reviews, tags, ingredients, instructions, photos, status)
    VALUES
      (@id, @title, @author, @authorInitials, @isFriend, @time, @rating, @reviews, @tags, @ingredients, @instructions, '[]', NULL)
  `);

  const insertComment = db.prepare(`
    INSERT INTO comments (recipe_id, author, initials, text, rating)
    VALUES (@recipeId, @author, @initials, @text, @rating)
  `);

  db.transaction(() => {
    for (const r of seedRecipes) {
      insertRecipe.run({
        id:             r.id,
        title:          r.title,
        author:         r.author,
        authorInitials: r.authorInitials,
        isFriend:       r.isFriend ? 1 : 0,
        time:           r.time,
        rating:         r.rating,
        reviews:        r.reviews,
        tags:           JSON.stringify(r.tags),
        ingredients:    JSON.stringify(r.ingredients),
        instructions:   JSON.stringify(r.instructions),
      });
      for (const c of r.comments) {
        insertComment.run({ recipeId: r.id, author: c.author, initials: c.initials, text: c.text, rating: c.rating });
      }
    }
  })();

  console.log('Database seeded with 6 recipes.');
}

module.exports = seed;
