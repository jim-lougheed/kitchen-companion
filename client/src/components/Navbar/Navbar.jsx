import { Link, useHistory } from 'react-router-dom';

import { Menu, Avatar } from 'antd';
import './Navbar.scss';

function Navbar() {
    let history = useHistory(); 

    const searchAllRecipes = (e) => {
        e.preventDefault();
        
        history.push(`/recipes/&query=${e.target[0].value}`)
    }

    const name = 'Jim';

    return (
        <Menu className='navbar'>
            <div className='div-container div-container--left'>
                <Link to='/home'>
                    <h1>Dinner's Ready Logo</h1>
                </Link>
                <Link to='/home'>
                    <p>Featured</p>
                </Link>
                <Link to='/myrecipes/all'>
                    <p>MyRecipes</p>
                </Link>
                <Link to='/myshoppinglist'>
                    <p>My Shopping List</p>
                </Link>
            </div>
            <div className='div-container div-container--right'>
                <form onSubmit={searchAllRecipes}>
                    <label>Search recipes...
                        <input type='text' name='recipeSearch' placeholder='Enter a search word'/>
                    </label>
                    <button type='submit'>Search</button>
                </form>

                <Link to='/recipes/search'>
                    <p>Search</p>
                </Link>
                <Link to='#'>
                    <Avatar>{name[0]}</Avatar>
                </Link>
            </div>
        </Menu>
    )
}

export default Navbar;