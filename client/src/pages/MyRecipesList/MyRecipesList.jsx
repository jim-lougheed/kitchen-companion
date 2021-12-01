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
            .catch((err) => console.error(err))
    }, [])

    const deleteRecipe = (id) => {
        axios
            .delete(`/myrecipes/${id}`)
            .then(({ data }) => {
                console.log(data)
            })
            .catch((err) => console.error(err))
        deleteFromState(id)
    }

    const deleteFromState = (id) => {
        setMyRecipes(myRecipes.filter((recipe) => {
            return recipe.id !== id
        }))
    }
    
    return (    
        <>
            <h1>My Recipes</h1>
            <Link to='/myrecipes/search'>
                <button>Search MyRecipes</button>
            </Link>
            {myRecipes ?
            <ul className='recipe-list__container'>
                {myRecipes.map((recipe) => {
                    return <div><ListedRecipe key={recipe.id} componentClassName='recipe-list' recipe={recipe}/>
                        <button onClick={() => deleteRecipe(recipe.id)}>x</button>
                        </div>
                })}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default MyRecipesList;