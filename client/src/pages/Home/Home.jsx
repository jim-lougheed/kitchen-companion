import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Home.scss';

function Home() {

    const [featuredRecipe, setFeaturedRecipe] = useState(null);

    useEffect(() => {
        axios
            .get(`/random`)
            .then(({ data: { recipes }}) => {
                console.log(recipes[0])
                setFeaturedRecipe(recipes[0])
            })
            .catch((err) => console.error(err))
    }, [])

    const handleAddToFavourites = () => {
        const recipeBody = {
            id: featuredRecipe.id,
            user_id: 1,
            summary: featuredRecipe.summary.substr(0, 1200),
            title: featuredRecipe.title,
            image: featuredRecipe.image ? featuredRecipe.image : 'http://via.placeholder.com/556x370.png?text=No+Image+Available',
            analyzedInstructions: JSON.stringify(featuredRecipe.analyzedInstructions),
            cuisines: JSON.stringify(featuredRecipe.cuisines),
            dairyFree: featuredRecipe.dairyFree,
            diets: JSON.stringify(featuredRecipe.diets),
            dishTypes: JSON.stringify(featuredRecipe.dishTypes),
            extendedIngredients: JSON.stringify(featuredRecipe.extendedIngredients),
            glutenFree: featuredRecipe.glutenFree,
            servings: featuredRecipe.servings,
            readyInMinutes: featuredRecipe.readyInMinutes,
            vegan: featuredRecipe.vegan,
            vegetarian: featuredRecipe.vegetarian
        }
        axios
            .post('/myrecipes', (recipeBody))
            .then(({data}) => console.log(`Added recipe to MyFavourites: ${data}`))
            .catch((err) => console.error(err))
    }

        return (
            <>
                {featuredRecipe ?
                <div>
                    <Link to={`/recipe/${featuredRecipe.id}`}><h1>{featuredRecipe.title}</h1></Link>
                    <img src={featuredRecipe.image ? featuredRecipe.image : 'http://via.placeholder.com/556x370.png?text=No+Image+Available'} alt={featuredRecipe.title} />
                </div>    
                : <p>Loading...</p>
                }                
                <button onClick={handleAddToFavourites}>Add to MyRecipes</button>
            </>
        )
}

export default Home;