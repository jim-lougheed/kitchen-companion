import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecipesList({ match: { params }}) {

    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`/recipes/${params.search}`)
            .then(({ data: { recipe }}) => {
                setRecipes(recipe)
            })

    }, [params.search])
    
    return (
        <>
            <h1>Search Results</h1>
            {recipes ?
            <ul className='recipe-list__container'>
                    {recipes.map((recipe) => <li
                    key={recipe.uri.substr(51,50)}
                    className='recipe-list__item'>
                    <Link to={`/recipe/${(recipe.uri.substr(51,50))}`}>
                        <h1 className='recipe-list__item-name'>{recipe.label}</h1>
                    </Link>
                    <img className='recipe-list__item-image' src={recipe.image} alt={recipe.label} />
                    <p className='recipe-list__item-ingredients'>{recipe.ingredients.length} ingredients</p>
                    </li>)}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default RecipesList;