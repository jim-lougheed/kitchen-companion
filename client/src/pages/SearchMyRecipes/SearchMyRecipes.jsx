import { useHistory } from "react-router-dom";
import { useState } from 'react';

function SearchMyRecipes() {
    
    const [searchParams, setSearchParams] = useState({
        vegetarian: false,
        vegan: false
    });
    
    const toggleSearchParams = (e) => {
        console.log(e.target.name);
        setSearchParams(prevState => ({
            ...prevState,
            [e.target.name]: !prevState[e.target.name]
        }))
    }

    let history = useHistory(); 
    const searchAllRecipes = (e) => {
        e.preventDefault();
        history.push(`/myrecipes/${e.target[2].value}&vegetarian=${searchParams.vegetarian}&vegan=${searchParams.vegan}`)
    }

    return (
        <form onSubmit={searchAllRecipes}>
            <label>Vegetarian
                <input name='vegetarian' type='checkbox' onChange={toggleSearchParams}></input>
                <span className="checkmark"></span>
            </label>
            <label>Vegan
                <input name='vegan' type='checkbox' onChange={toggleSearchParams}></input>
                <span className="checkmark"></span>
            </label>
            <label>Search by keyword...
                <input type='text' name='myRecipesSearch' placeholder='Enter a search word'/>
            </label>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchMyRecipes;