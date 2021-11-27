import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MyRecipesSearchResults({ match: { params }}) {
    const [myRecipes, setMyRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/myrecipes/${params.search}`)
            .then(({ data }) => {
                setMyRecipes(data)
            })
            .catch((err) => console.error(err))

    }, [params.search])
    
    return (
        <>
            <h1>Search Results</h1>
            {myRecipes ?
            <ul className='recipe-container'>
                    {myRecipes.map((recipe) => <li
                    key={recipe.uri.substr(51,50)}
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

export default MyRecipesSearchResults;