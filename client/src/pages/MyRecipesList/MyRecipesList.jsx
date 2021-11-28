import { useEffect, useState } from 'react';
import axios from 'axios';

import ListedRecipe from '../../components/ListedRecipe';

function MyRecipesList() {

    const [myRecipes, setMyRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`/myrecipes`)
            .then(({ data }) => {
                data.forEach((recipe) => {
                    recipe.ingredientLines = JSON.parse(recipe.ingredientLines)
                setMyRecipes(data)
            })
    }, [])
    })

    return (    
        <>
            <h1>My Recipes</h1>
            {myRecipes ?
            <ul className='recipe-list__container'>
                {myRecipes.map((recipe) => {
                    return <ListedRecipe key={recipe.uri.substr(51,50)} componentClassName='recipe-list' recipe={recipe}/>
                })}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default MyRecipesList;