import { Link } from 'react-router-dom';

function RecipeTags({ recipe }) {
    console.log(recipe)
    return (
        <>
            <Link to={`/recipes/&cuisines=${recipe.cuisines[0]}`}>
                <p>{recipe.cuisines[0]}</p>
            </Link>
            <Link to={`/recipes/&dishTypes=${recipe.dishTypes[0]}`}>
                <p>{recipe.dishTypes[0]}</p>
            </Link>
            <Link to={`/recipes/&diets=${recipe.diets[0]}`}>
                <p>{recipe.diets[0]}</p>
            </Link>
            <Link to={`/recipes/&occasions=${recipe.occasions[0]}`}>
                <p>{recipe.occasions[0]}</p>
            </Link>
        </>
    )
}

export default RecipeTags;