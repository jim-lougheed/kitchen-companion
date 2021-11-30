import { Link, useHistory } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
    let history = useHistory(); 

    const searchAllRecipes = (e) => {
        e.preventDefault();
        
        history.push(`/recipes/${e.target[0].value}`)
    }

    return (
        <nav className='navbar'>
            <div className='div-container .div-container--left'>
                <Link to='/home'>
                    <h1>Dinner's Ready Logo</h1>
                </Link>
                <Link to='/home'>
                    <p>Featured</p>
                </Link>
                <Link to='/recipes'>
                    <p>Search Recipes</p>
                </Link>
                <Link to='/myshoppinglist'>
                    <p>My Shopping List</p>
                </Link>
            </div>
            <div className='div-container .div-container--right'>
                <form onSubmit={searchAllRecipes}>
                    <label>Search recipes...
                        <input type='text' name='recipeSearch' placeholder='Enter a search word'/>
                    </label>
                    <button type='submit'>Search</button>
                </form>

                <Link to='/recipes'>
                    <p>Search</p>
                </Link>
                <Link to='#'>
                    <p>Profile</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;