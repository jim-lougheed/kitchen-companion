import { Menu, Checkbox } from 'antd';

import Meats from '../../assets/icons/drumstick-bite-solid.svg';
import Vegetables from '../../assets/icons/carrot-solid.svg';
import Fruits from '../../assets/icons/apple-alt-solid.svg';
import Dairy from '../../assets/icons/cheese-solid.svg';

import './IngredientsOnHand.scss';

const { SubMenu } = Menu;
function IngredientsOnHand({ toggleIngredientsOnHand, ingredients }) {

    return (
        <>
            <aside className='ingredients-checklist'>
                <h3 className='ingredients-checklist__title'>What's in the fridge...</h3>
                <form>
                <Menu mode='inline'>
                    <SubMenu title='Meats' key='sub1' icon={<img src={Meats} className='submenuIcon' alt='meat icon' />}>
                        <Menu.Item key='1'>
                            <Checkbox name='chicken' onChange={toggleIngredientsOnHand} checked={ingredients.chicken}>Chicken</Checkbox>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Checkbox name='beef' onChange={toggleIngredientsOnHand} checked={ingredients.beef}>Beef</Checkbox>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Checkbox name='pork' onChange={toggleIngredientsOnHand} checked={ingredients.pork}>Pork</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title='Veggies' key='sub2' icon={<img src={Vegetables} className='submenuIcon' alt='vegetable icon' />}>
                        <Menu.Item>
                            <Checkbox name='spinach' onChange={toggleIngredientsOnHand} checked={ingredients.spinach}>Spinach</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='tomatoes' onChange={toggleIngredientsOnHand} checked={ingredients.tomatoes}>Tomatoes</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='mushrooms' onChange={toggleIngredientsOnHand} checked={ingredients.mushrooms}>Mushrooms</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='potatos' onChange={toggleIngredientsOnHand} checked={ingredients.potatos}>Potatos</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='onions' onChange={toggleIngredientsOnHand} checked={ingredients.onions}>Onions</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='greenpeppers' onChange={toggleIngredientsOnHand} checked={ingredients.greenpeppers}>Green Peppers</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='garlic' onChange={toggleIngredientsOnHand} checked={ingredients.garlic}>Garlic</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='olives' onChange={toggleIngredientsOnHand} checked={ingredients.olives}>Olives</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='cabbage' onChange={toggleIngredientsOnHand} checked={ingredients.cabbage}>Cabbage</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='lettuce' onChange={toggleIngredientsOnHand} checked={ingredients.lettuce}>Lettuce</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title='Fruits' key='sub3' icon={<img src={Fruits} className='submenuIcon' alt='fruits icon' />}>
                        <Menu.Item>
                            <Checkbox name='chicken' onChange={toggleIngredientsOnHand} checked={ingredients.chicken}>Chicken</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='beef' onChange={toggleIngredientsOnHand} checked={ingredients.beef}>Beef</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='pork' onChange={toggleIngredientsOnHand} checked={ingredients.pork}>Pork</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title='Dairy' key='sub4' icon={<img src={Dairy} className='submenuIcon' alt='dairy icon' />}>
                        <Menu.Item>
                            <Checkbox name='chicken' onChange={toggleIngredientsOnHand} checked={ingredients.chicken}>Chicken</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='beef' onChange={toggleIngredientsOnHand} checked={ingredients.beef}>Beef</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='pork' onChange={toggleIngredientsOnHand} checked={ingredients.pork}>Pork</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                </form>
            </aside>
        </>
    )
}

export default IngredientsOnHand;