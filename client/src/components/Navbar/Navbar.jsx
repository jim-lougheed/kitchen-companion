import { Link, useHistory } from 'react-router-dom';

import { Menu, Avatar, Input, Button } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
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
            <div className='nav-container nav-container--left'>
                <Link to='/'>
                    <h1>KitchenCompanion Logo</h1>
                </Link>
                <Link to='/myrecipes/all'>
                    <p>MyRecipes</p>
                </Link>
                <Link to='/myshoppinglist'>
                    <p>My Shopping List</p>
                </Link>
                <Link to='/recipes/search'>
                    <p>Search All Recipes</p>
                </Link>
            </div>
            <div className='nav-container nav-container--right'>
                <form onSubmit={searchAllRecipes} className='nav-container__form'>
                    <p className='nav-container__quick-search'>Quick Search</p>
                    <Input type='text' name='recipeSearch' placeholder='Enter a search word' className='nav-container__input'/>
                    <Button htmlType='submit' shape='round' className='nav-container__button'>{<SearchOutlined/>}</Button>
                </form>

                
                <Link to='#' className='nav-container__avatar'>
                    <Avatar>{name[0]}</Avatar>
                </Link>
            </div>
        </Menu>
    )
}

export default Navbar;