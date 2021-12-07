import { Link } from 'react-router-dom';

import { Card } from 'antd';
import './ListedRecipeNoImage.scss';

const { Meta } = Card;

function ListedRecipeNoImage({ recipe: { id, title }}) {
    return (
        <li className='related-recipe__item'>
            <Link to={`/recipe/${id}`}>
                <Card hoverable className='related-recipe__item-image' loading={title ? false : true}>
                    <Meta title={title} className='recipe-list__item-name'/>
                </Card>
            </Link>
        </li>
    )
}

export default ListedRecipeNoImage;