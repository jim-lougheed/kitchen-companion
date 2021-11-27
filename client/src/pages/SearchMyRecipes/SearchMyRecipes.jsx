import { useHistory } from "react-router-dom";

function SearchMyRecipes() {
    let history = useHistory(); 
    const searchAllRecipes = (e) => {
        e.preventDefault();
        history.push(`/myrecipes/${e.target[0].value}`)
    }

    return (
        <form onSubmit={searchAllRecipes}>
            <label>Search recipes...
                <input type='text' name='myRecipesSearch' placeholder='Enter a search word'/>
            </label>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchMyRecipes;