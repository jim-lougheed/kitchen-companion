require("dotenv").config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const knex = require("knex")(require('./knexfile').development);
const myrecipesRoutes = require('./routes/myrecipes');

const { PORT } = 8080;
const mysql = require('mysql');

const app = express();

/**************
 * middleware *
 **************/
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/**********
 * routes *
 **********/
app.use('/myrecipes', myrecipesRoutes);

/*
 *GET 5 RANDOM recipes for Home page
 */
app
    .get('/random', (req, res) => {
        axios
            .get(`https://api.spoonacular.com/recipes/random?apiKey=ca2d14a3669448e6b1f470c6a99a52b1&number=5`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))
    })

/*
*GET single recipe by ID
*/
app
    .get('/recipe/:id', (req, res) => {
        axios
            .get(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=ca2d14a3669448e6b1f470c6a99a52b1`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))
    })
    
/*
*GET 3 recipes related to ID
*/
app    
    .get('/recipe/relatedTo/:id', (req, res) => {
        axios
            .get(`https://api.spoonacular.com/recipes/${req.params.id}/similar?apiKey=ca2d14a3669448e6b1f470c6a99a52b1&number=3`)
            .then(({ data }) => res.send(data))
    })

/*
 *GET 20 recipes by keyword 
 */
app
    .get('/recipes/:keyword', (req, res) => {
        console.log(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ca2d14a3669448e6b1f470c6a99a52b1${req.params.keyword}&number=30`)
    axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ca2d14a3669448e6b1f470c6a99a52b1${req.params.keyword}&number=30`)
        .then(({ data }) => res.send(data))
        .catch((err) => console.error(err))
})

/*
 *GET 20 recipes by ingredients on-hand
 */
app
    .get('/recipes/byIngredients/:ingredients', (req, res) => {
        axios
            .get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=ca2d14a3669448e6b1f470c6a99a52b1&ingredients=${req.params.ingredients}&number=20&ranking=1&ignorePantry`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))
    })



app.listen(PORT, console.log(`Server running on port ${PORT}`));