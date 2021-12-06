import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Tabs, Input, Button, Popover } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import './SearchRecipes.scss';

function SearchRecipes({ ingredients }) {

    const [inputKeyword, setInputKeyword] = useState(null);
    const [visible, setVisible] = useState(false);
    
    let history = useHistory(); 

    const handleChange = (e) => {
        if (e.target[0]) {
            console.log(e.target[0].value)
            setInputKeyword(e.target[0].value)
        } else {
            console.log(e.target.value)
            setInputKeyword(e.target.value)
        }
        setVisible(false)
    }

    const searchAllRecipes = (e) => {
        e.preventDefault();
        if (inputKeyword !== '') {
            history.push(`/recipes/&query=${inputKeyword}`)
        } else {
            setInputKeyword('')
            setVisible(true)
        }
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

    const { TabPane } = Tabs;
    
    return (
        <>
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
                    <TabPane tab='Quick Search' key='3'>
                        <form onSubmit={searchAllRecipes} className='search__quick-search search__tab-container'>
                            <p className='search__keyword'>Quick search</p>
                            <Input type='text' name='recipeSearch' placeholder='Enter a keyword' className='search__small-input' onChange={handleChange}/>
                            <Button htmlType='submit' shape='round' className='search__search-button'>{<SearchOutlined/>} Search</Button>
                        </form>
                    </TabPane>
                    <TabPane tab='Advanced Search' key='4'>
                        <form onSubmit={advancedSearch} className='search__advanced-search search__tab-container'>
                            <label htmlFor='diets'>Diets</label>
                                <select name='diets' id='diets'>
                                    <option value=''></option>
                                    <option value='gluten-free'>Gluten-free</option>
                                    <option value='ketogenic'>Keto</option>
                                    <option value='lacto-vegetarian'>Lacto-Vegetarian</option>
                                    <option value='low-fodmap'>Low FODMAP</option>
                                    <option value='ovo-vegetarian'>Ovo-Vegetarian</option>
                                    <option value='paleo'>Paleo</option>
                                    <option value='pescetarian'>Pescetarian</option>
                                    <option value='primal'>Primal</option>
                                    <option value='vegan'>Vegan</option>
                                    <option value='vegetarian'>Vegetarian</option>
                                </select>
                            <label htmlFor='cuisines'>Cuisines</label>
                                <select name='cuisines' id='cuisines'>
                                    <option value=''></option>
                                    <option value='african'>African</option>
                                    <option value='american'>American</option>
                                    <option value='british'>British</option>
                                    <option value='cajun'>Cajun</option>
                                    <option value='caribbean'>Caribbean</option>
                                    <option value='chinese'>Chinese</option>
                                    <option value='eastern-european'>Eastern European</option>
                                    <option value='european'>European</option>
                                    <option value='french'>French</option>
                                    <option value='german'>German</option>
                                    <option value='greek'>Greek</option>
                                    <option value='indian'>Indian</option>
                                    <option value='irish'>Irish</option>
                                    <option value='italian'>Italian</option>
                                    <option value='japanese'>Japanese</option>
                                    <option value='jewish'>Jewish</option>
                                    <option value='korean'>Korean</option>
                                    <option value='latin-american'>Latin American</option>
                                    <option value='mediterranean'>Mediterranean</option>
                                    <option value='middle-eastern'>Middle Eastern</option>
                                    <option value='nordic'>Nordic</option>
                                    <option value='southern'>Southern</option>
                                    <option value='spanish'>Spanish</option>
                                    <option value='thai'>Thai</option>
                                    <option value='vietnamese'>Vietnamese</option>
                                </select>
                            <label htmlFor='intolerances'>Intolerances</label>
                                <select name='intolerances' id='intolerances'>
                                    <option value=''></option>
                                    <option value='dairy'>Dairy</option>
                                    <option value='egg'>Egg</option>
                                    <option value='gluten'>Gluten</option>
                                    <option value='grain'>Grains</option>
                                    <option value='peanut'>Peanut</option>
                                    <option value='seafood'>Seafood</option>
                                    <option value='sesame'>Sesame</option>
                                    <option value='shellfish'>Shellfish</option>
                                    <option value='soy'>Soy</option>
                                    <option value='sulfite'>Sulfites</option>
                                    <option value='tree-nut'>Tree Nuts</option>
                                    <option value='wheat'>Wheat</option>
                                </select>
                            <label htmlFor='type'>Meal Type</label>
                                <select name='type' id='type'>
                                    <option value=''></option>
                                    <option value='appetizer'>Appetizer</option>
                                    <option value='bread'>Bread</option>
                                    <option value='breakfast'>Breakfast</option>
                                    <option value='beverage'>Beverage</option>
                                    <option value='dessert'>Dessert</option>
                                    <option value='drink'>Drink</option>
                                    <option value='fingerfood'>Finger Food</option>
                                    <option value='main-course'>Main Course</option>
                                    <option value='marinade'>Marinade</option>
                                    <option value='salad'>Salad</option>
                                    <option value='side-dish'>Side Dish</option>
                                    <option value='snack'>Snack</option>
                                    <option value='soup'>Soup</option>
                                </select>
                            <p>Exclude Ingredients</p>
                                <Input type='text' name='excludeIngredients' id='excludeIngredients' placeholder='Enter ingredients to exclude, separated by a ","'></Input>
                            <p>Include Ingredients from "What's in my fridge"</p>
                                <Input type='checkbox' name='includeIngredients' id='includeIngredients'></Input>
                            <p>Maximum Cook Time</p>
                                <Input type='number' name='maxReadyTime' id='maxReadyTime' placeholder='Time in minutes' className='search__small-input'></Input>
                            <p>Keyword (required)</p>
                            <Input type='text' name='keyword' placeholder='Enter a keyword' className='search__small-input' onChange={handleChange}/>
                            <Button htmlType='submit' shape='round' className='search__search-button'>{<SearchOutlined/>} Search</Button>
                        </form>
                    </TabPane>
                </Tabs>
            </Card>
        </>
    )
}

export default SearchRecipes;