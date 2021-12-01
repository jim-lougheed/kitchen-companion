import { useEffect, useState } from 'react';
import axios from 'axios';

import ListedRecipe from '../../components/ListedRecipe';

function MyRecipesSearchResults({ match: { params }}) {
    const keyword = (params.search.substring(0, (params.search.length-6)))
    const restriction = (params.search.substring((params.search.length-5), (params.search.length)))
    console.log(keyword, restriction)

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
                    if (restriction === 'vegan') {
                        if (recipe.extendedIngredients.includes(keyword) && recipe.vegan == 1){
                            return <ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe}/>
                    }    
                    } else if (restriction === 'veget') {
                        if (recipe.extendedIngredients.includes(keyword) && recipe.vegetarian == 1){
                            console.log(recipe)
                            return <ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe}/>
                    }    
                    } else if (restriction === 'daiFr') {
                        if (recipe.extendedIngredients.includes(keyword) && recipe.dairyFree == 1){
                            console.log(recipe)
                            return <ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe}/>
                    }    
                    }
                    else if (restriction === 'gluFr') {
                        if (recipe.extendedIngredients.includes(keyword) && recipe.glutenFree == 1){
                            console.log(recipe)
                            return <ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe}/>
                    }    
                    }
                    else if (recipe.extendedIngredients.includes(keyword)){
                        console.log(recipe)
                    return <ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe}/>
                    }
                })}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default MyRecipesSearchResults;