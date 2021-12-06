import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Tabs, Input, Button, Popover, Select } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import './SearchRecipes.scss';

function SearchRecipes({ ingredients }) {

    const [inputKeyword, setInputKeyword] = useState(null);
    const [visible, setVisible] = useState(false);
    
    let history = useHistory(); 

    const handleChange = (e) => {
        setInputKeyword(e.target.value)
    }

    const searchByIngredientsOnHand = (e) => {
        e.preventDefault();
        let listOfIngredients = '';
        for (const key in ingredients) {
            if (ingredients[key] === true) {
            listOfIngredients += `${key},+`; 
            }
        }
        if (listOfIngredients) {
            history.push(`/recipes/byIngredients/${listOfIngredients}`)
        } else {
            alert('Select some items you have on hand')
        }
    }

    const dinnerSelectorByIngredientsOnHand = (e) => {
        e.preventDefault();
        let listOfIngredients = '';
        for (const key in ingredients) {
            if (ingredients[key] === true) {
            listOfIngredients += `${key},+`; 
            }
        }
        if (listOfIngredients) {
            history.push(`/dinnerselector/${listOfIngredients}`)
        } else {
            alert('Select some items you have on hand')
        }
    }

    const advancedSearch = (e) => {
        e.preventDefault();
        if (inputKeyword === '' || inputKeyword === null)
        {
            setInputKeyword('')
            setVisible(true)
        } else {
            let listOfIngredients = '';
            for (const key in ingredients) {
                if (ingredients[key] === true) {
                listOfIngredients += `${key},+`; 
                }
            }
            const { diets, cuisines, intolerances, type, maxReadyTime, excludeIngredients } = e.target;
            const searchURL = `/recipes/&query=${inputKeyword}${diets.value ? `&diet=${diets.value}` : ''}${cuisines.value ? `&cuisine=${cuisines.value}` : ''}${intolerances.value ? `&intolerances=${intolerances.value}` : ''}${type.value ? `&type=${type.value}` : ''}${maxReadyTime.value ? `&maxReadyTime=${maxReadyTime.value}` : ''}${excludeIngredients.value ? `&excludeIngredients=${excludeIngredients.value}` : ''}${document.getElementById('includeIngredients').checked ? `&includeIngredients=${listOfIngredients}` : ''}`
            history.push(searchURL)
        } 
    }

    const { TabPane } = Tabs;
    const { TextArea } = Input;
    const { Option } = Select;
    
    return (
        <>
        <h1 className='recipe-list__header'>Search All Recipes</h1>
            <Card className='search__container'>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='DinnerWheel' key='1'>
                        <form onSubmit={dinnerSelectorByIngredientsOnHand} className='search__dinner-wheel search__tab-container'>
                            <p className='search__dinner-wheel-description'>Use the KitchenCompanion Dinner Wheel to randomly select a recipe using ingredients you have on hand</p>
                            <Button htmlType='submit' shape='round' className='search__search-button'>{<SearchOutlined/>} Search</Button>
                        </form>
                    </TabPane>
                    <TabPane tab="Search by 'What's in my fridge?" key='2'>
                        <form onSubmit={searchByIngredientsOnHand} className='search__search-by-ingredients search__tab-container'>
                            <p className='search__search-by-ingredients-description'>Search by whats in your fridge</p>
                            <Button htmlType='submit' shape='round' className='search__search-button'>{<SearchOutlined/>} Search</Button>
                        </form>
                    </TabPane>
                    <TabPane tab='Advanced Search' key='3'>
                        <form onSubmit={advancedSearch} className='search__advanced-search search__tab-container'>
                            <label htmlFor='diets' className='search__label'>Diets</label>
                                <Select name='diets' id='diets' className='search__select-menu'>
                                    <Option value=''></Option>
                                    <Option value='gluten-free'>Gluten-free</Option>
                                    <Option value='ketogenic'>Keto</Option>
                                    <Option value='lacto-vegetarian'>Lacto-Vegetarian</Option>
                                    <Option value='low-fodmap'>Low FODMAP</Option>
                                    <Option value='ovo-vegetarian'>Ovo-Vegetarian</Option>
                                    <Option value='paleo'>Paleo</Option>
                                    <Option value='pescetarian'>Pescetarian</Option>
                                    <Option value='primal'>Primal</Option>
                                    <Option value='vegan'>Vegan</Option>
                                    <Option value='vegetarian'>Vegetarian</Option>
                                </Select>
                            <label htmlFor='cuisines' className='search__label'>Cuisines</label>
                                <Select name='cuisines' id='cuisines' className='search__select-menu'>
                                    <Option value=''></Option>
                                    <Option value='african'>African</Option>
                                    <Option value='american'>American</Option>
                                    <Option value='british'>British</Option>
                                    <Option value='cajun'>Cajun</Option>
                                    <Option value='caribbean'>Caribbean</Option>
                                    <Option value='chinese'>Chinese</Option>
                                    <Option value='eastern-european'>Eastern European</Option>
                                    <Option value='european'>European</Option>
                                    <Option value='french'>French</Option>
                                    <Option value='german'>German</Option>
                                    <Option value='greek'>Greek</Option>
                                    <Option value='indian'>Indian</Option>
                                    <Option value='irish'>Irish</Option>
                                    <Option value='italian'>Italian</Option>
                                    <Option value='japanese'>Japanese</Option>
                                    <Option value='jewish'>Jewish</Option>
                                    <Option value='korean'>Korean</Option>
                                    <Option value='latin-american'>Latin American</Option>
                                    <Option value='mediterranean'>Mediterranean</Option>
                                    <Option value='middle-eastern'>Middle Eastern</Option>
                                    <Option value='nordic'>Nordic</Option>
                                    <Option value='southern'>Southern</Option>
                                    <Option value='spanish'>Spanish</Option>
                                    <Option value='thai'>Thai</Option>
                                    <Option value='vietnamese'>Vietnamese</Option>
                                </Select>
                            <label htmlFor='intolerances' className='search__label'>Intolerances</label>
                                <Select name='intolerances' id='intolerances' className='search__select-menu'>
                                    <Option value=''></Option>
                                    <Option value='dairy'>Dairy</Option>
                                    <Option value='egg'>Egg</Option>
                                    <Option value='gluten'>Gluten</Option>
                                    <Option value='grain'>Grains</Option>
                                    <Option value='peanut'>Peanut</Option>
                                    <Option value='seafood'>Seafood</Option>
                                    <Option value='sesame'>Sesame</Option>
                                    <Option value='shellfish'>Shellfish</Option>
                                    <Option value='soy'>Soy</Option>
                                    <Option value='sulfite'>Sulfites</Option>
                                    <Option value='tree-nut'>Tree Nuts</Option>
                                    <Option value='wheat'>Wheat</Option>
                                </Select>
                            <label htmlFor='type' className='search__label'>Meal Type</label>
                                <Select name='type' id='type' className='search__select-menu'>
                                    <Option value=''></Option>
                                    <Option value='appetizer'>Appetizer</Option>
                                    <Option value='bread'>Bread</Option>
                                    <Option value='breakfast'>Breakfast</Option>
                                    <Option value='beverage'>Beverage</Option>
                                    <Option value='dessert'>Dessert</Option>
                                    <Option value='drink'>Drink</Option>
                                    <Option value='fingerfood'>Finger Food</Option>
                                    <Option value='main-course'>Main Course</Option>
                                    <Option value='marinade'>Marinade</Option>
                                    <Option value='salad'>Salad</Option>
                                    <Option value='side-dish'>Side Dish</Option>
                                    <Option value='snack'>Snack</Option>
                                    <Option value='soup'>Soup</Option>
                                </Select>
                            <p className='search__label'>Exclude Ingredients</p>
                                <TextArea type='text' name='excludeIngredients' id='excludeIngredients' placeholder='Enter ingredients to exclude, separated by a comma (",")' className='search__textarea'></TextArea>
                            <p className='search__label'>Include Ingredients from "What's in my fridge"</p>
                                <Input type='checkbox' name='includeIngredients' id='includeIngredients'></Input>
                            <p className='search__label'>Maximum Cook Time</p>
                                <Input type='number' name='maxReadyTime' id='maxReadyTime' placeholder='Time in minutes' className='search__small-input'></Input>
                            <p className='search__label'>Keyword (required)</p>
                            <Popover content='Please enter a keyword before clicking "Search"' visible={visible}>
                                <Input type='text' name='keyword' placeholder='Enter a keyword' className={`search__small-input search__small-input${inputKeyword === '' && `--empty`}`} onChange={handleChange}/>
                            </Popover>
                            <Button htmlType='submit' shape='round' className='search__search-button'>{<SearchOutlined/>} Search</Button>
                        </form>
                    </TabPane>
                </Tabs>
            </Card>
        </>
    )
}

export default SearchRecipes;