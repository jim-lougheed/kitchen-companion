import { Link } from 'react-router-dom';

import { Card } from 'antd';
import './ListedRecipe.scss';

const { Meta } = Card;

function ListedRecipe({ recipe: { id, title, image }}) {
    return (
        <li className='recipe-list__item'>
            <Link to={`/recipe/${id}`}>
                <Card hoverable cover={<img className='recipe-list__item-image' alt={title} src={image ? image : 'http://via.placeholder.com/300x300.png?text=No+Image+Available'} />} loading={title ? false : true}>
                    <Meta title={title} className='recipe-list__item-name'/>
                </Card>
            </Link>
        </li>
    )
}

export default ListedRecipe;