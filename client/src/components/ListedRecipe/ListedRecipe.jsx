import { Link } from 'react-router-dom';

import './ListedRecipe.scss';

function ListedRecipe({ componentClassName, recipe: { uri, label, image, ingredientLines} }) {
    return (
        <li>
            <Link className={`${componentClassName}__item`} to={`/recipe/${(uri.substr(51,50))}`}>
            <img className={`${componentClassName}__item-image`} src={image} alt={label} />
            <h1 className={`${componentClassName}__item-name`}>{label}</h1>
            <div className={`${componentClassName}__item-ingredients-container`}>
                {ingredientLines.map((ingredientLine) => {
                    return <p className={`${componentClassName}__item-ingredients`}>{ingredientLine}</p>
                })}
            </div>
            </Link>
        </li>
    )
}

export default ListedRecipe;