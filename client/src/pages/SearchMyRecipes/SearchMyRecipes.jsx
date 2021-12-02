import { useHistory } from "react-router-dom";

function SearchMyRecipes() {
    

    let history = useHistory(); 
    const searchAllRecipes = (e) => {
        e.preventDefault();
        history.push(`/myrecipes/${e.target.myRecipesSearch.value}+${e.target.selection.value ? + e.target.selection.value : 'empty'}`)
    }

    return (
        <form onSubmit={searchAllRecipes}>
            <h3>Search by dietary restriction</h3>
                <input name='selection' value='veget' type='radio'></input>
                <label htmlFor='vegetarian'>Vegetarian</label>
            
                <input name='selection' value='vegan' type='radio'></input>
                <label htmlFor='vegan'>Vegan</label>
            
                <input name='selection' value='daiFr' type='radio'></input>
                <label htmlFor='dairyFree'>Dairy-Free</label>
                
                <input name='selection' value='gluFr' type='radio'></input>
                <label htmlFor='glutenFree'>Gluten-Free</label>
            
            
            
            <label>Search by keyword...
                <input type='text' name='myRecipesSearch' placeholder='Enter a search word'/>
            </label>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchMyRecipes;