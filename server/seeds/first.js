
const usersData = [
  {
    id: 1,
    first_name: 'Jim',
    last_name: 'Lougheed'
  }
]

const favouriteRecipesData = [
  {
    id: '5a1de7bd0d00b3abeaf2892619a73f7a',
    user_id: 1,
    uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_5a1de7bd0d00b3abeaf2892619a73f7a',
    label: "Chicken And Rice L'Orange recipes",
    image: 'https://www.edamam.com/web-img/454/45448a86f31cccba0504b5df02a97770',
    yield: 4,
    dietLabels: JSON.stringify([]),
    healthLabels: JSON.stringify([
      "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free"
    ]),
    ingredientLines: JSON.stringify([
      "1 cup uncooked Texmati® White Rice",
            "1 cup orange juice",
            "1 cup water",
            "1 teaspoon salt",
            "3 tablespoons butter, divided",
            "1/4 cup sliced almonds",
            "4 boneless, skinless chicken breast halves",
            "1/4 cup orange marmalade",
            "1/4 cup sliced green onions"
    ]),
    calories: 1874,
    totalTime: 30,
    cuisineType: JSON.stringify([
      "French"
    ]),
    mealType:  JSON.stringify([
      "lunch/dinner"
    ]),
    dishType: JSON.stringify([
      "starter"
    ])
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
