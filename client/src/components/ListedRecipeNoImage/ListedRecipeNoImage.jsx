import { Link } from 'react-router-dom';

import './ListedRecipeNoImage.scss';

function ListedRecipeNoImage({ recipe: { id, title }}) {
    return (
        <li>
            <Link className='related-recipe__item' to={`/recipe/${id}`}>
                <h1 className='related-recipe__item-name'>{title}</h1>
            </Link>
        </li>
    )
}

export default ListedRecipeNoImage;