import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MyRecipesSearchResults({ match: { params }}) {
    const [myRecipes, setMyRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`/myrecipes/${params.search}`)
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
                    {myRecipes.map((recipe) => <li
                    key={recipe.uri.substr(51,50)}
                    className='recipe-list__item'>
                    <Link to={`/recipe/${(recipe.uri.substr(51,50))}`}>
                        <h1 className='recipe-list__item-name'>{recipe.label}</h1>
                    </Link>
                    <img className='recipe-list__item-image' src={recipe.image} alt={recipe.label} />
                    <p className='recipe-list__item-ingredients'>{JSON.parse(recipe.ingredientLines)}</p>
                    </li>)}
            </ul>
            : <p>Loading...</p>}
        </>
    )
}

export default MyRecipesSearchResults;