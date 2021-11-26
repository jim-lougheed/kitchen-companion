require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const knex = require("knex")(require('./knexfile').development);
const { PORT } = process.env;
// const mysql = require('mysql');

const app = express();

/**************
 * middleware *
 **************/
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


/*
 *GET a RANDOM recipe based on 10 search items
 */
app
    .get('/random', (req, res) => {
        const randomNumber = Math.floor(Math.random()*10);
        const randomSearchArray = ['chicken', 'mushrooms', 'beef', 'tomatoes', 'avocadoes', 'pasta', 'potatoes', 'pork', 'cheese', 'rice'];
        axios
            .get(`${process.env.API_URL}?type=public&q=${randomSearchArray[randomNumber]}${process.env.API_KEY}&random=true`)
            .then(({ data: { hits } }) => res.send(hits[randomNumber]))
            .catch((err) => console.error(err))
    })

/*
*GET single recipe by ID
*/
app
    .get('/recipe/:id', (req, res) => {
        axios
            .get(`${process.env.API_URL}/${req.params.id}?type=public${process.env.API_KEY}`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))
    })

/*
 *GET all recipes by category 
 */
app
    .get('/recipes/:category', (req, res) => {
    axios
        .get(`${process.env.API_URL}?type=public&q=${req.params.category}${process.env.API_KEY}`)
        .then(({ data: { hits } }) => res.send(hits))
        .catch((err) => console.error(err))
})

/*
*GET all recipes from database
*/
app
    .get('/myrecipes', (req, res) => {
        knex
            .select('*')
            .from('favourite-recipes')
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    message: 'Error getting recipes'
                })
            })
    })

/*
*GET single recipe from database
*/
app
    .get('/myrecipes/:search', (req, res) => {
        knex
            .select('*')
            .where('ingredientLines', 'like', `%${req.params.search}%`)
            .from('favourite-recipes')
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    message: 'No matches found'
                })
            })
    })

/*
*POST recipe to database
*/
/* POST BODY MUST HAVE THIS FORMAT:
{
    "id": "5a1de7bd0d00b3abeaf2892619a73f7a",
    "user_id": 1,
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5a1de7bd0d00b3abeaf2892619a73f7a",
    "label": "Crazy other dish",
    "image": "https://www.edamam.com/web-img/454/45448a86f31cccba0504b5df02a97770",
    "yield": 4,
    "dietLabels": "[]",
    "healthLabels": "[\"Gluten-Free\",\"Wheat-Free\",\"Egg-Free\",\"Peanut-Free\",\"Soy-Free\",\"Fish-Free\",\"Shellfish-Free\",\"Pork-Free\",\"Red-Meat-Free\",\"Crustacean-Free\",\"Celery-Free\",\"Mustard-Free\",\"Sesame-Free\",\"Lupine-Free\",\"Mollusk-Free\",\"Alcohol-Free\"]",
    "ingredientLines": "[\"1 cup uncooked Texmati® White Rice\",\"1 cup orange juice\",\"1 cup water\",\"1 teaspoon salt\",\"3 tablespoons butter, divided\",\"1/4 cup sliced almonds\",\"4 boneless, skinless chicken breast halves\",\"1/4 cup orange marmalade\",\"1/4 cup sliced green onions\"]",
    "calories": 1874,
    "totalTime": 30,
    "cuisineType": "[\"French\"]",
    "mealType":  "[\"lunch/dinner\"]",
    "dishType": "[\"starter\"]"
  }
  */

app
    .post('/myrecipes/add', (req, res) => {
        knex('favourite-recipes')
            .insert(req.body)
            .then((favouritedRecipe) => {
                res.status(201).json(favouritedRecipe)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({
                    message: 'Error adding recipe to favourites'
                })
            })
    })


app.listen(PORT, console.log(`Server running on port ${PORT}`));