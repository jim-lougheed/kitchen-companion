import { useHistory } from "react-router-dom";

function SearchRecipes() {
    let history = useHistory(); 
    const searchAllRecipes = (e) => {
        e.preventDefault();
        
        history.push(`/recipes/${e.target[0].value}`)
    }

    return (
        <form onSubmit={searchAllRecipes}>
            <label>Search recipes...
                <input type='text' name='recipeSearch' placeholder='Enter a search word'/>
            </label>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchRecipes;