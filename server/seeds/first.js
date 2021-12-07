
const usersData = [
  {
    id: 1,
    email: 'jims.codes@gmail.com',
    password: 'password',
    first_name: 'Jim',
    last_name: 'Lougheed',
    shoppingList: JSON.stringify(['celery', 'lettuce']),
    dietaryRestriction: null
  }
]

const favouriteRecipesData = [
  {
    id: 632826,
    user_id: 1,
    summary: "If you want to add more <b>Chinese</b> recipes to your collection, Asian Dumplings might be a recipe you should try.",
    title: "Asian Dumplings",
    image: "https://spoonacular.com/recipeImages/632826-556x370.jpg",
    analyzedInstructions: JSON.stringify(["In a large bowl, combine first 8 ingredients (pork through salt, and scallions, if desired).", "Mix well.", "On a plate, place one wonton wrapper and wet the edges with warm water.", "Place one spoonful of the pork mixture in the center of the wonton.", "Fold wonton wrapper in half, over the mixture (use more warm water if nec.)", "Pick up the dumpling and using water, pinch the ends together (make a seal)"]),
    cuisines: JSON.stringify(["Chinese", "Asian"]),
    dairyFree: true,
    diets: JSON.stringify(["dairy free"]),
    dishTypes: JSON.stringify(["antipasti", "starter", "snack"]),
    extendedIngredients: JSON.stringify(["1 pound ground pork", "fresh ginger, minced", "2 heads Napa Cabbage, shredded and chopped"]),
    glutenFree: false,
    servings: 1,
    readyInMinutes: 45,
    vegan: false,
    vegetarian: false
  }
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert(usersData);
    })
    .then(() => {
      return knex('favourite-recipes').del();
    })
    .then(() => {
      return knex('favourite-recipes').insert(favouriteRecipesData)
    });
};
