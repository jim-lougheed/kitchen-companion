require("dotenv").config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const knex = require("knex")(require('./knexfile').development);
const myrecipesRoutes = require('./routes/myrecipes');

const { PORT } = process.env;
// const mysql = require('mysql');

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
 *GET a RANDOM recipe based on 10 search items
 */
app
    .get('/random', (req, res) => {
        axios
            .get(`${process.env.API_URL}random${process.env.API_KEY}`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))

        // const randomNumber = Math.floor(Math.random()*10);
        // const randomSearchArray = ['chicken', 'mushrooms', 'beef', 'tomatoes', 'avocadoes', 'pasta', 'potatoes', 'pork', 'cheese', 'rice'];
        // axios
        //     .get(`${process.env.API_URL}?type=public&q=${randomSearchArray[randomNumber]}${process.env.API_KEY}&random=true`)
        //     .then(({ data: { hits } }) => res.send(hits[randomNumber]))
        //     .catch((err) => console.error(err))
    })

/*
*GET single recipe by ID
*/
app
    .get('/recipe/:id', (req, res) => {
        axios
            .get(`${process.env.API_URL}${req.params.id}/information${process.env.API_KEY}`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))
        // axios
        //     .get(`${process.env.API_URL}/${req.params.id}?type=public${process.env.API_KEY}`)
        //     .then(({ data }) => res.send(data))
        //     .catch((err) => console.error(err))
    })

/*
 *GET all recipes by category 
 */
app
    .get('/recipes/:category', (req, res) => {
        console.log(req.params.category)
    axios
        .get(`${process.env.API_URL}complexSearch${process.env.API_KEY}&query=${req.params.category}`)
        .then(({ data }) => res.send(data))
        .catch((err) => console.error(err))
})

/*
 *GET 6 recipes by ingredients on-hand
 */
app
    .get('/recipes/byIngredients/:ingredients', (req, res) => {
        axios
            .get(`${process.env.API_URL}findByIngredients${process.env.API_KEY}&ingredients=${req.params.ingredients}&number=20&ranking=1&ignorePantry`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))
    })



app.listen(PORT, console.log(`Server running on port ${PORT}`));