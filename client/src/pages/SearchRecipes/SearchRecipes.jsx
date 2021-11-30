import { useHistory } from 'react-router-dom';

function SearchRecipes({ ingredients }) {
    
    let history = useHistory(); 

    const searchAllRecipes = (e) => {
        e.preventDefault();
        history.push(`/recipes/${e.target[0].value}`)
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

    
    return (
        <>
            <form onSubmit={searchAllRecipes}>
                <label>Search by keyword
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
                </>
    )
}

export default SearchRecipes;