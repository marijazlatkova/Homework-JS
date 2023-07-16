// Returning Strings + Bonus

let favoriteRecipe = {
  title: 'Cake',
  serves: 4,
  ingredients: ['flour', 'eggs', 'cocoa', 'sugar'],
  isVegetarian: true
};

function returningStrings(favoriteRecipe, returningValues) {
  for (let prop in favoriteRecipe) {
    if (typeof favoriteRecipe[prop] === 'string' && returningValues === 'string') {
      console.log(`${prop}: ${favoriteRecipe[prop]}`);
    } else if (typeof favoriteRecipe[prop] === 'number' && returningValues === 'number') {
      console.log(`${prop}: ${favoriteRecipe[prop]}`);
    } else if (typeof favoriteRecipe[prop] === 'boolean' && returningValues === 'boolean') {
      console.log(`${prop}: ${favoriteRecipe[prop]}`);
    } else if (Array.isArray(favoriteRecipe[prop]) && returningValues === 'array') {
      console.log(`${prop}: ${favoriteRecipe[prop]}`);
    }
  }
};

returningStrings(favoriteRecipe, 'string');
returningStrings(favoriteRecipe, 'boolean');
returningStrings(favoriteRecipe, 'number');
returningStrings(favoriteRecipe, 'array');

