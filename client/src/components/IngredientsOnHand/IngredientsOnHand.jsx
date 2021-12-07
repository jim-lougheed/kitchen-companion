import { Menu, Checkbox } from 'antd';

import Meats from '../../assets/icons/drumstick-bite-solid.svg';
import Vegetables from '../../assets/icons/carrot-solid.svg';
import Fruits from '../../assets/icons/apple-alt-solid.svg';
import Dairy from '../../assets/icons/cheese-solid.svg';
import Grains from '../../assets/icons/grains.jpg';

import './IngredientsOnHand.scss';

const { SubMenu } = Menu;
function IngredientsOnHand({ toggleIngredientsOnHand, ingredients }) {

    return (
        <>
            <aside className='ingredients-checklist'>
                <h3 className='ingredients-checklist__title'>What's in myKitchen?</h3>
                <form>
                <Menu mode='inline'>
                    <SubMenu title='Proteins' key='sub1' icon={<img src={Meats} className='submenuIcon' alt='proteins icon' />}>
                        <Menu.Item key='1'>
                            <Checkbox name='beef' onChange={toggleIngredientsOnHand} checked={ingredients.beef}>Beef</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='chickpeas' onChange={toggleIngredientsOnHand} checked={ingredients.chickpeas}>Chickpeas</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='chicken' onChange={toggleIngredientsOnHand} checked={ingredients.chicken}>Chicken</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='lamb' onChange={toggleIngredientsOnHand} checked={ingredients.lamb}>Lamb</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='pork' onChange={toggleIngredientsOnHand} checked={ingredients.pork}>Pork</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='soyprotein' onChange={toggleIngredientsOnHand} checked={ingredients.soyprotein}>Soy Protein</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='tempeh' onChange={toggleIngredientsOnHand} checked={ingredients.tempeh}>Tempeh</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='tofu' onChange={toggleIngredientsOnHand} checked={ingredients.tofu}>Tofu</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title='Veggies' key='sub2' icon={<img src={Vegetables} className='submenuIcon' alt='vegetable icon' />}>
                        <Menu.Item>
                            <Checkbox name='artichokes' onChange={toggleIngredientsOnHand} checked={ingredients.artichokes}>Artichokes</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='beets' onChange={toggleIngredientsOnHand} checked={ingredients.beets}>Beets</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='broccoli' onChange={toggleIngredientsOnHand} checked={ingredients.broccoli}>Broccoli</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='brusselssprouts' onChange={toggleIngredientsOnHand} checked={ingredients.brusselssprouts}>Brussels Sprouts</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='cabbage' onChange={toggleIngredientsOnHand} checked={ingredients.cabbage}>Cabbage</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='carrots' onChange={toggleIngredientsOnHand} checked={ingredients.carrots}>Carrots</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='celery' onChange={toggleIngredientsOnHand} checked={ingredients.celery}>Celery</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='corn' onChange={toggleIngredientsOnHand} checked={ingredients.corn}>Corn</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='cucumber' onChange={toggleIngredientsOnHand} checked={ingredients.cucumber}>Cucumber</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='eggplant' onChange={toggleIngredientsOnHand} checked={ingredients.eggplant}>Eggplant</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='garlic' onChange={toggleIngredientsOnHand} checked={ingredients.garlic}>Garlic</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='greenpeppers' onChange={toggleIngredientsOnHand} checked={ingredients.greenpeppers}>Green Peppers</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='leek' onChange={toggleIngredientsOnHand} checked={ingredients.leek}>Leek</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='lettuce' onChange={toggleIngredientsOnHand} checked={ingredients.lettuce}>Lettuce</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='mushrooms' onChange={toggleIngredientsOnHand} checked={ingredients.mushrooms}>Mushrooms</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='olives' onChange={toggleIngredientsOnHand} checked={ingredients.olives}>Olives</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='onions' onChange={toggleIngredientsOnHand} checked={ingredients.onions}>Onions</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='peppers' onChange={toggleIngredientsOnHand} checked={ingredients.peppers}>Peppers</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='potatos' onChange={toggleIngredientsOnHand} checked={ingredients.potatos}>Potatos</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='radish' onChange={toggleIngredientsOnHand} checked={ingredients.radish}>Radish</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='spinach' onChange={toggleIngredientsOnHand} checked={ingredients.spinach}>Spinach</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='sweetpotato' onChange={toggleIngredientsOnHand} checked={ingredients.sweetpotato}>Sweet Potato</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='tomatoes' onChange={toggleIngredientsOnHand} checked={ingredients.tomatoes}>Tomatoes</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='zucchini' onChange={toggleIngredientsOnHand} checked={ingredients.zucchini}>Zucchini</Checkbox>
                        </Menu.Item>
                        
                    </SubMenu>
                    <SubMenu title='Fruits' key='sub3' icon={<img src={Fruits} className='submenuIcon' alt='fruits icon' />}>
                        <Menu.Item>
                            <Checkbox name='apples' onChange={toggleIngredientsOnHand} checked={ingredients.apples}>Apples</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='bananas' onChange={toggleIngredientsOnHand} checked={ingredients.bananas}>Bananas</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='blueberries' onChange={toggleIngredientsOnHand} checked={ingredients.blueberries}>Blueberries</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='cherries' onChange={toggleIngredientsOnHand} checked={ingredients.cherries}>Cherries</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='mango' onChange={toggleIngredientsOnHand} checked={ingredients.mango}>Mango</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='grapes' onChange={toggleIngredientsOnHand} checked={ingredients.grapes}>Grapes</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='orange' onChange={toggleIngredientsOnHand} checked={ingredients.orange}>Orange</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='pomegranate' onChange={toggleIngredientsOnHand} checked={ingredients.pomegranate}>Pomegranate</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='raspberries' onChange={toggleIngredientsOnHand} checked={ingredients.raspberries}>Raspberries</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='strawberries' onChange={toggleIngredientsOnHand} checked={ingredients.strawberries}>Strawberries</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='watermelon' onChange={toggleIngredientsOnHand} checked={ingredients.watermelon}>Watermelon</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title='Dairy and Alts' key='sub4' icon={<img src={Dairy} className='submenuIcon' alt='dairy icon' />}>
                        <Menu.Item>
                            <Checkbox name='almondmilk' onChange={toggleIngredientsOnHand} checked={ingredients.almondmilk}>Almond Milk</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='butter' onChange={toggleIngredientsOnHand} checked={ingredients.butter}>Butter</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='cheese' onChange={toggleIngredientsOnHand} checked={ingredients.cheese}>Cheese</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='cream' onChange={toggleIngredientsOnHand} checked={ingredients.cream}>Cream</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='milk' onChange={toggleIngredientsOnHand} checked={ingredients.milk}>Milk</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='oatmilk' onChange={toggleIngredientsOnHand} checked={ingredients.oatmilk}>Oat Milk</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='soymilk' onChange={toggleIngredientsOnHand} checked={ingredients.soymilk}>Soy Milk</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title='Grains' key='sub5' icon={<img src={Grains} className='submenuIcon' alt='grains icon' />}>
                        <Menu.Item>
                            <Checkbox name='oats' onChange={toggleIngredientsOnHand} checked={ingredients.oats}>Oats</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='orzo' onChange={toggleIngredientsOnHand} checked={ingredients.orzo}>Orzo</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='quinoa' onChange={toggleIngredientsOnHand} checked={ingredients.quinoa}>Quinoa</Checkbox>
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox name='rice' onChange={toggleIngredientsOnHand} checked={ingredients.rice}>Rice</Checkbox>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                </form>
            </aside>
        </>
    )
}

export default IngredientsOnHand;