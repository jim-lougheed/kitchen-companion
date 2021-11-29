import { useEffect, useState } from 'react';
import axios from 'axios';

import ListedRecipe from '../../components/ListedRecipe';

function RecipesList({ match: { params }}) {

    const [recipes, setRecipes] = useState(null);
    
    useEffect(() => {
        axios
            .get(`/recipes/${params.search}`)
            .then(({ data }) => {
                setRecipes(data.results)
            })

    }, [params.search])
    {recipes && console.log(recipes)}
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

export default RecipesList;