import { useEffect, useState } from 'react';
import axios from "axios";

function RecipePage(props) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const id = props.params.recipeId;
        axios
            .get(`http://localhost:8080/recipe/${id}`)
            .then(({ data }) => {
                setRecipe(data)
            })

    }, [props.params.recipeId])
    
    const handleAddToFavourites = () => {
        const recipeBody = {
            id: recipe.recipe.uri.substr(51,50),
            user_id: 1,
            uri: recipe.recipe.uri,
            label: recipe.recipe.label,
            image: recipe.recipe.image,
            yield: recipe.recipe.yield,
            dietLabels: JSON.stringify(recipe.recipe.dietLabels),
            healthLabels: JSON.stringify(recipe.recipe.healthLabels),
            ingredientLines: JSON.stringify(recipe.recipe.ingredientLines),
            calories: recipe.recipe.calories,
            totalTime: recipe.recipe.totalTime,
            cuisineType: JSON.stringify(recipe.recipe.cuisineType),
            mealType:  JSON.stringify(recipe.recipe.mealType),
            dishType: JSON.stringify(recipe.recipe.dishType)
        }
        axios
            .post('http://localhost:8080/myrecipes/add', (recipeBody))
            .then(({data}) => console.log(`Added recipe to MyFavourites: ${data}`))
            .catch((err) => console.error(err))
    }

        return (
            <>
                {recipe ?
                <div>
                    <p>{recipe.recipe.label}</p>
                    <img src={recipe.recipe.image} alt={recipe.recipe.image} />
                </div>    
                : <p>Loading...</p>
                }
                <button onClick={handleAddToFavourites}>Add to MyRecipes</button>
            </>
        )
}

export default RecipePage;