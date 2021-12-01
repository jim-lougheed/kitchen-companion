import { Link } from 'react-router-dom';

import './ListedRecipe.scss';

function ListedRecipe({ componentClassName, recipe: { id, title, image }}) {
    return (
        <li>
            <Link className={`${componentClassName}__item`} to={`/recipe/${id}`}>
            <img className={`${componentClassName}__item-image`} src={image} alt={title} />
            <h1 className={`${componentClassName}__item-name`}>{title}</h1>
            </Link>
        </li>
    )
}

export default ListedRecipe;