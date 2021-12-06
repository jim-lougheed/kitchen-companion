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
 *GET 6 RANDOM recipes for Home page
 */
app
    .get('/random', (req, res) => {
        axios
            .get(`${process.env.API_URL}random${process.env.API_KEY}&number=6`)
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
*GET 3 recipes related to ID
*/
app    
    .get('/recipe/relatedTo/:id', (req, res) => {
        axios
            .get(`${process.env.API_URL}${req.params.id}/similar${process.env.API_KEY}&number=3`)
            .then(({ data }) => res.send(data))
    })

/*
 *GET 20 recipes by keyword 
 */
app
    .get('/recipes/:keyword', (req, res) => {
        console.log(`${process.env.API_URL}complexSearch${process.env.API_KEY}${req.params.keyword}&number=30`)
    axios
        .get(`${process.env.API_URL}complexSearch${process.env.API_KEY}${req.params.keyword}&number=30`)
        .then(({ data }) => res.send(data))
        .catch((err) => console.error(err))
})

/*
 *GET 20 recipes by ingredients on-hand
 */
app
    .get('/recipes/byIngredients/:ingredients', (req, res) => {
        axios
            .get(`${process.env.API_URL}findByIngredients${process.env.API_KEY}&ingredients=${req.params.ingredients}&number=20&ranking=1&ignorePantry`)
            .then(({ data }) => res.send(data))
            .catch((err) => console.error(err))
    })



app.listen(PORT, console.log(`Server running on port ${PORT}`));