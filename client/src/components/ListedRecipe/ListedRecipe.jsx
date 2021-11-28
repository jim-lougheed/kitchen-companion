import { Link } from 'react-router-dom';

function ListedRecipe({ componentClassName, recipe: { uri, label, image, ingredientLines} }) {
    return (
        <li className={`${componentClassName}__item`}>
            <Link to={`/recipe/${(uri.substr(51,50))}`}>
                <h1 className={`${componentClassName}__item-name`}>{label}</h1>
            </Link>
            <img className={`${componentClassName}__item-image`} src={image} alt={label} />
            {ingredientLines.map((ingredientLine) => {
                return <p className={`${componentClassName}__item-ingredients`}>{ingredientLine}</p>
            })}
        </li>
    )
}

export default ListedRecipe;