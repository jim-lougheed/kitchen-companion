import { useEffect, useState } from 'react';
import axios from 'axios';

import ListedRecipe from '../../components/ListedRecipe';

function RecipesList({ match: { params }}) {

    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`/recipes/${params.search}`)
            .then(({ data }) => {
                setRecipes(data)
            })

    }, [params.search])
    
    return (
        <>
            <h1>Search Results</h1>
            {recipes ?
            <ul className='recipe-list__container'>
                    {recipes.map((recipe) => {
                    return <ListedRecipe key={recipe.recipe.uri.substr(51,50)} componentClassName='recipe-list' recipe={recipe.recipe} />
                    })}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default RecipesList;