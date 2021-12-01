import { useHistory } from 'react-router-dom';

function SearchRecipes({ ingredients }) {
    
    let history = useHistory(); 

    const searchAllRecipes = (e) => {
        e.preventDefault();
        history.push(`/recipes/&query=${e.target[0].value}`)
    }

    const searchByIngredientsOnHand = (e) => {
        e.preventDefault();
        let listOfIngredients = '';
        for (const key in ingredients) {
            if (ingredients[key] === true) {
            listOfIngredients += `${key},+`; 
            }
        }
        history.push(`/recipes/byIngredients/${listOfIngredients}`)
    }

    const dinnerSelectorByIngredientsOnHand = (e) => {
        e.preventDefault();
        let listOfIngredients = '';
        for (const key in ingredients) {
            if (ingredients[key] === true) {
            listOfIngredients += `${key},+`; 
            }
        }
        history.push(`/dinnerselector/${listOfIngredients}`)
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
        const searchURL = `/recipes/${diets.value ? `&diet=${diets.value}` : ''}${cuisines.value ? `&cuisine=${cuisines.value}` : ''}${intolerances.value ? `&intolerances=${intolerances.value}` : ''}${type.value ? `&type=${type.value}` : ''}${maxReadyTime.value ? `&maxReadyTime=${maxReadyTime.value}` : ''}${excludeIngredients.value ? `&excludeIngredients=${excludeIngredients.value}` : ''}${document.getElementById('includeIngredients').checked ? `&includeIngredients=${listOfIngredients}` : ''}`
        history.push(searchURL)
    }

    
    return (
        <>
            <form onSubmit={searchAllRecipes}>
                <label>Quick search
                    <input type='text' name='recipeSearch' placeholder='Enter a keyword'/>
                        </label>
                    <button type='submit'>Search</button>
                </form>
                <form onSubmit={searchByIngredientsOnHand}>
                    <label>Search by whats in your fridge
                    </label>
                    <button type='submit'>Search</button>
                </form>
                <form onSubmit={dinnerSelectorByIngredientsOnHand}>
                    <label>Use the dinner wheel!
                    </label>
                    <button type='submit'>Search</button>
                </form>
                <form onSubmit={advancedSearch}>
                    <label for='diets'>Diets</label>
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
                    <label for='cuisines'>Cuisines</label>
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
                        <label for='intolerances'>Intolerances</label>
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
                        <label for='type'>Meal Type</label>
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
                        <label for='excludeIngredients'>Exclude Ingredients</label>
                            <input type='text' name='excludeIngredients' id='excludeIngredients' placeholder='Enter any ingredients to exclude (separated by commas, ",")'></input>
                        <label for='includeIngredients'>Include Ingredients from "What's in my fridge"</label>
                            <input type='checkbox' name='includeIngredients' id='includeIngredients'></input>
                        <label for='maxReadyTime'>Maximum Cook Time</label>
                            <input type='number' name='maxReadyTime' id='maxReadyTime' placeholder='Time in minutes'></input>
                            <button type='submit'>Search</button>

                </form>
                </>
    )
}

export default SearchRecipes;