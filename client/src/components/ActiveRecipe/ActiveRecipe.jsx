import { useEffect, useState } from 'react';
import axios from "axios";

import './ActiveRecipe.scss';

function ActiveRecipe(props) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const id = props.params.recipeId;
        axios
            .get(`/recipe/${id}`)
            .then((result) => {
                setRecipe(result.data)
            })
            .catch((err) => console.error(err))

    }, [props.params.recipeId])
    
    const handleAddToFavourites = () => {
        const recipeBody = {
            id: recipe.id,
            user_id: 1,
            summary: recipe.summary.substr(0, 1200),
            title: recipe.title,
            image: recipe.image,
            analyzedInstructions: JSON.stringify(recipe.analyzedInstructions),
            cuisines: JSON.stringify(recipe.cuisines),
            dairyFree: recipe.dairyFree,
            diets: JSON.stringify(recipe.diets),
            dishTypes: JSON.stringify(recipe.dishTypes),
            extendedIngredients: JSON.stringify(recipe.extendedIngredients),
            glutenFree: recipe.glutenFree,
            servings: recipe.servings,
            readyInMinutes: recipe.readyInMinutes,
            vegan: recipe.vegan,
            vegetarian: recipe.vegetarian
        }
        axios
            .post('/myrecipes', (recipeBody))
            .then(({data}) => console.log(`Added recipe to MyFavourites: ${data}`))
            .catch((err) => console.error(err))
    }
    
        return (
            <>
                {recipe ?
                <div className='recipe__container'>
                    <div className='recipe__img-ingredients-container'>
                        <img src={recipe.image} alt={recipe.image} />
                        <p>{recipe.summary}</p>
                    </div>
                    <div className='recipe__name-directions-container'>
                        <h2>{recipe.title}</h2>
                        {recipe.extendedIngredients.map((ingredient) => {
                            return <p key={ingredient.id}>{ingredient.originalString}</p>
                        })}
                        {recipe.analyzedInstructions &&
                            recipe.analyzedInstructions[0].steps.map((step) => {
                                return <p key={step.number}>{step.step}</p>
                        })}
                    </div>
                </div>    
                : <p>Loading...</p>
                }
                <button onClick={handleAddToFavourites}>Add to MyRecipes</button>
            </>
        )
}

export default ActiveRecipe;