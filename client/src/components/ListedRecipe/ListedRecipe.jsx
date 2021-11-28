import { Link } from 'react-router-dom';

function ListedRecipe(props) {
    console.log(props);
    return (
            <div>
                    <Link to={`/recipe/${(props.recipe.uri.substr(51,50))}`}>
                        <h1 className='recipe-list__item-name'>{props.recipe.label}</h1>
                    </Link>
                    <img className='recipe-list__item-image' src={props.recipe.image} alt={props.recipe.label} />
                    <p className='recipe-list__item-ingredients'>{JSON.parse(props.recipe.ingredientLines)}</p>
            </div>
    )
}

export default ListedRecipe;