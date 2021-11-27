import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MyRecipesList() {

    const [myRecipes, setMyRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/myrecipes`)
            .then(({ data }) => {
                setMyRecipes(data)
            })

    }, [])
    
    return (
        <>
            <h1>My Recipes</h1>
            {myRecipes ?
            <ul className='recipe-container'>
                    {myRecipes.map((recipe) => <li
                    className='recipe'>
                    <Link to={`/recipe/${(recipe.uri.substr(51,50))}`}><h1>{recipe.label}</h1></Link>
                    <img src={recipe.image} alt={recipe.label} />
                    <p>{JSON.parse(recipe.ingredientLines)}</p>
                    </li>)}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default MyRecipesList;