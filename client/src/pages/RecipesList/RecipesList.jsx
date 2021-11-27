import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecipesList({ match: { params }}) {

    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/recipes/${params.search}`)
            .then(({ data }) => {
                setRecipes(data)
            })

    }, [params.search])
    
    return (
        <>
            <h1>Search Results</h1>
            {recipes ?
            <ul className='recipe-container'>
                    {recipes.map((recipe) => <li
                    key={recipe.recipe.uri.substr(51,50)}
                    className='recipe'>
                    <Link to={`/recipe/${(recipe.recipe.uri.substr(51,50))}`}><h1>{recipe.recipe.label}</h1></Link>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                    <p>{recipe.recipe.ingredients.length} ingredients</p>
                    </li>)}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default RecipesList;