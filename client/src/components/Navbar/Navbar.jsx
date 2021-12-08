import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import { Menu, Avatar, Input, Button } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import Logo from '../../assets/logos/longLogo.jpg';

import './Navbar.scss';

function Navbar() {
    const [keyword, setKeyword] = useState('');
    let history = useHistory(); 

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const searchAllRecipes = (e) => {
        e.preventDefault();
        history.push(`/recipes/&query=${keyword}`)
        setKeyword('')
    }

    const name = 'Jim';

    return (
        <Menu className='navbar'>
            <div className='nav-container nav-container--left'>
                <Link to='/'>
                    <img src={Logo} alt='KitchenCompanion logo' className='nav-container__logo'></img>
                </Link>
                <Link to='/myrecipes/all'>
                    <p className='nav-container__link'>myRecipes</p>
                </Link>
                <Link to='/myshoppinglist'>
                    <p className='nav-container__link'>myShopping List</p>
                </Link>
                <Link to='/recipes/search'>
                    <p className='nav-container__link'>Search All Recipes</p>
                </Link>
            </div>
            <div className='nav-container nav-container--right'>
                <form onSubmit={searchAllRecipes} className='nav-container__form'>
                    <p className='nav-container__quick-search'>Quick Search</p>
                    <Input type='text' name='recipeSearch' placeholder='Enter a search word' className='nav-container__input' value={keyword} onChange={handleChange} />
                    <Button htmlType='submit' shape='round' className='nav-container__button'>{<SearchOutlined/>}</Button>
                </form> 
                <Link to='#' className='nav-container__avatar'>
                    <Avatar className='nav-container__avatar-img'>{name[0]}</Avatar>
                </Link>
            </div>
        </Menu>
    )
}

export default Navbar;