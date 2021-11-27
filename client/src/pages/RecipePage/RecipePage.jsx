import { useEffect, useState } from 'react';
import axios from "axios";

function RecipePage(props) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const id = props.params.recipeId;
        axios
            .get(`/recipe/${id}`)
            .then(({ data: { recipe }}) => {
                setRecipe(recipe)
            })

    }, [props.params.recipeId])
    
    const handleAddToFavourites = () => {
        const recipeBody = {
            id: recipe.uri.substr(51,50),
            user_id: 1,
            uri: recipe.uri,
            label: recipe.label,
            image: recipe.image,
            yield: recipe.yield,
            dietLabels: JSON.stringify(recipe.dietLabels),
            healthLabels: JSON.stringify(recipe.healthLabels),
            ingredientLines: JSON.stringify(recipe.ingredientLines),
            calories: recipe.calories,
            totalTime: recipe.totalTime,
            cuisineType: JSON.stringify(recipe.cuisineType),
            mealType:  JSON.stringify(recipe.mealType),
            dishType: JSON.stringify(recipe.dishType)
        }
        axios
            .post('/myrecipes', (recipeBody))
            .then(({data}) => console.log(`Added recipe to MyFavourites: ${data}`))
            .catch((err) => console.error(err))
    }

        return (
            <>
                {recipe ?
                <div>
                    <p>{recipe.label}</p>
                    <img src={recipe.image} alt={recipe.image} />
                </div>    
                : <p>Loading...</p>
                }
                <button onClick={handleAddToFavourites}>Add to MyRecipes</button>
            </>
        )
}

export default RecipePage;