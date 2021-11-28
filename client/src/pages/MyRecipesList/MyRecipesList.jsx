import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ListedRecipe from '../../components/ListedRecipe';

function MyRecipesList() {

    const [myRecipes, setMyRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`/myrecipes`)
            .then(({ data }) => {
                setMyRecipes(data)
            })
    }, [])
    
    return (
        <>
            <h1>My Recipes</h1>
            {myRecipes ?
            <ul className='recipe-list__container'>
                    {myRecipes.map((recipe) => {
                        <li key={recipe.uri.substr(51,50)} className='recipe-list__item'>
                            <ListedRecipe recipe={recipe}/>
                        </li>
                    })}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default MyRecipesList;