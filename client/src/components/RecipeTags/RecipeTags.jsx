import { Tag } from 'antd';
import './RecipeTags.scss';

function RecipeTags({ recipe: { cuisines, dishTypes, diets, occasions }}) {
    return (
        <>
        <div className='recipe-tags__container'>
            {cuisines[0] && 
                <Tag color='magenta' className='recipe-tags'>{cuisines[0]}</Tag>
            }
            {dishTypes[0] &&
                <Tag color='red' className='recipe-tags'>{dishTypes[0]}</Tag>
            }
            {diets[0] &&
                <Tag color='orange' className='recipe-tags'>{diets[0]}</Tag>
            }
            {occasions[0] && 
                <Tag color='lime' className='recipe-tags'>{occasions[0]}</Tag>
            }
            </div>
        </>
    )
}

export default RecipeTags;