import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Home.scss';

function Home() {

    const [featuredRecipe, setFeaturedRecipe] = useState(null);

    useEffect(() => {
        axios
            .get(`/random`)
            .then(({ data: { recipe } }) => {
                setFeaturedRecipe(recipe)
            })
            .catch((err) => console.error(err))
    }, [])

    const handleAddToFavourites = () => {
        const recipeBody = {
            id: featuredRecipe.uri.substr(51,50),
            user_id: 1,
            uri: featuredRecipe.uri,
            label: featuredRecipe.label,
            image: featuredRecipe.image,
            yield: featuredRecipe.yield,
            dietLabels: JSON.stringify(featuredRecipe.dietLabels),
            healthLabels: JSON.stringify(featuredRecipe.healthLabels),
            ingredientLines: JSON.stringify(featuredRecipe.ingredientLines),
            calories: featuredRecipe.calories,
            totalTime: featuredRecipe.totalTime,
            cuisineType: JSON.stringify(featuredRecipe.cuisineType),
            mealType:  JSON.stringify(featuredRecipe.mealType),
            dishType: JSON.stringify(featuredRecipe.dishType)
        }
        axios
            .post('/myrecipes/add', (recipeBody))
            .then(({data}) => console.log(`Added recipe to MyFavourites: ${data}`))
            .catch((err) => console.error(err))
    }

        return (
            <>
                {featuredRecipe ?
                <div>
                    <Link to={`/recipe/${(featuredRecipe.uri.substr(51,50))}`}><h1>{featuredRecipe.label}</h1></Link>
                    <img src={featuredRecipe.image} alt={featuredRecipe.image} />
                </div>    
                : <p>Loading...</p>
                }                
                <button onClick={handleAddToFavourites}>Add to MyRecipes</button>
            </>
        )
}

export default Home;