import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Home.scss';

function Home() {

    const [featuredRecipe, setFeaturedRecipe] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/random`)
            .then(({ data }) => {
                setFeaturedRecipe(data)
            })
            .catch((err) => console.error(err))

    }, [])

    const handleAddToFavourites = () => {
        const recipeBody = {
            id: featuredRecipe.recipe.uri.substr(51,50),
            user_id: 1,
            uri: featuredRecipe.recipe.uri,
            label: featuredRecipe.recipe.label,
            image: featuredRecipe.recipe.image,
            yield: featuredRecipe.recipe.yield,
            dietLabels: JSON.stringify(featuredRecipe.recipe.dietLabels),
            healthLabels: JSON.stringify(featuredRecipe.recipe.healthLabels),
            ingredientLines: JSON.stringify(featuredRecipe.recipe.ingredientLines),
            calories: featuredRecipe.recipe.calories,
            totalTime: featuredRecipe.recipe.totalTime,
            cuisineType: JSON.stringify(featuredRecipe.recipe.cuisineType),
            mealType:  JSON.stringify(featuredRecipe.recipe.mealType),
            dishType: JSON.stringify(featuredRecipe.recipe.dishType)
        }
        axios
            .post('http://localhost:8080/myrecipes/add', (recipeBody))
            .then(({data}) => console.log(`Added recipe to MyFavourites: ${data}`))
            .catch((err) => console.error(err))
    }

    // handleSearch = (e) => {
    //     e.preventDefault();
    //     const searchText = {
    //         "search": this.state.searchInput
    //     };
    //     axios
    //     .post(`http://localhost:8080/recipes`, searchText)
    //     .then((response) => {
    //     this.setState({
    //         recipes: response.data
    //     })
    // })
    // }

    // handleChange = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         searchInput: e.target.value
    //     })
    // }

        return (
            <>
                {featuredRecipe ?
                <div>
                    <p>{featuredRecipe.recipe.label}</p>
                    <img src={featuredRecipe.recipe.image} alt={featuredRecipe.recipe.image} />
                </div>    
                : <p>Loading...</p>
                }
                
                <button onClick={handleAddToFavourites}>Add to MyRecipes</button>
            </>
        )
}

export default Home;