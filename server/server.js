require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const { PORT } = process.env;

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
    .get('/recipe/category/:category', (req, res) => {
    axios
        .get(`${process.env.API_URL}?type=public&q=${req.params.category}${process.env.API_KEY}`)
        .then(({ data: { hits } }) => res.send(hits))
        .catch((err) => console.error(err))
})



app.listen(PORT, console.log(`Server running on port ${PORT}`));