import { useEffect, useState } from 'react';
import axios from 'axios';

import ListedRecipe from '../../components/ListedRecipe';

function MyRecipesSearchResults({ match: { params }}) {
    const keyword = (params.search.substring(0, (params.search.length-21)))
    const vegetarian = (params.search.substring((params.search.length-8), (params.search.length-9)))
    const vegan = (params.search.substring((params.search.length-1), (params.search.length)))
    console.log(keyword, vegetarian, vegan)

    const [myRecipes, setMyRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`/myrecipes`)
            .then(({ data }) => {
                setMyRecipes(data)
            })
            .catch((err) => console.error(err))
    }, [params.search])
    
    return (
        <>
            <h1>Search Results</h1>
            {myRecipes ?
            <ul className='recipe-list__container'>
                {myRecipes.map((recipe) => {
                    if (recipe.extendedIngredients.includes(keyword)){
                    return <ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe}/>
                    }
                })}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default MyRecipesSearchResults;