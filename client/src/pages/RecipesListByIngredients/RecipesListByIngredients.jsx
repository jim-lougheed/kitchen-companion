import { useEffect, useState } from 'react';
import axios from 'axios';

import ListedRecipe from '../../components/ListedRecipe';

function RecipesListByIngredients({ match: { params }}) {
    console.log(params)

    const [recipes, setRecipes] = useState(null);
    
    useEffect(() => {
        axios
            .get(`/recipes/byIngredients/${params.ingredients}`)
            .then(({ data }) => {
                setRecipes(data)
            })
            .catch((err) => console.error(err))

    }, [params.ingredients])
    
    return (
        <>
            <h1>Search Results</h1>
            {recipes ?
            <ul className='recipe-list__container'>
                    {recipes.map((recipe) => {
                    return <ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe} />
                    })}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default RecipesListByIngredients;