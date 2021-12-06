import { Link } from 'react-router-dom';

import { Tag } from 'antd';
import './RecipeTags.scss';

function RecipeTags({ recipe: { cuisines, dishTypes, diets, occasions }}) {
    return (
        <>
        <div className='recipe-tags__container'>
            {cuisines[0] && 
            <Link to={`/recipes/&cuisines=${cuisines[0]}`}>
                <Tag color='magenta' className='recipe-tags'>{cuisines[0]}</Tag>
            </Link>
            }
            {dishTypes[0] &&
            <Link to={`/recipes/&dishTypes=${dishTypes[0]}`}>
                <Tag color='red' className='recipe-tags'>{dishTypes[0]}</Tag>
            </Link>
            }
            {diets[0] &&
            <Link to={`/recipes/&diets=${diets[0]}`}>
                <Tag color='orange' className='recipe-tags'>{diets[0]}</Tag>
            </Link>
            }
            {occasions[0] && <Link to={`/recipes/&occasions=${occasions[0]}`}>
                <Tag color='lime' className='recipe-tags'>{occasions[0]}</Tag>
            </Link>
            }
            </div>
        </>
    )
}

export default RecipeTags;