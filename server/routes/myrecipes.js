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
            .select('*')
            .where('id', req.body.id)
            .then((foundRecipe) => {
                if (!foundRecipe[0]){
                    res.status(201).send('Successfully added to MyRecipes')
                    return knex('favourite-recipes').insert(req.body)
                } else {
                    res.send('Recipe already saved')
                }
            })
            .catch((err) => {
                console.error(err)
                res.status(400).json({
                    message: 'Error adding recipe to favourites'
                })
            })

            // .insert(req.body)
            // .then((favouritedRecipe) => {
            //     res.status(201).json(favouritedRecipe)
            // })
            // .catch((err) => {
            //     console.log(err)
            //     res.status(400).json({
            //         message: 'Error adding recipe to favourites'
            //     })
            // })
    })    

router
    .route('/:id')
/*
*DELETE single recipe from database
*/
    .delete((req, res) => {
        knex('favourite-recipes')
        .select('*')
        .where('id', req.params.id)
        .delete()
        .then(() => {
            res.send(`Successfully deleted recipe id ${req.params.id}`)
        })
        .catch((err) => {
            console.error(err)
            res.json({
                message: 'Error deleting recipe from favourites'
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