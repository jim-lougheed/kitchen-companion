const express = require('express');
const router = express.Router();
const knex = require("knex")(require('../knexfile').development);

router
    .route('/')
/*
*GET all recipes from database
*/
    .get((req, res) => {
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
*POST recipe to database
*/
    .post((req, res) => {
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

router
    .route('/:search')
/*
*GET single recipe from database
*/
    .get((req, res) => {
        knex
        .select('*')
        .where('extendedIngredients', 'like', `%${req.params.search}%`)
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

    module.exports = router;