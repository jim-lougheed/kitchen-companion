import { Link } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
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
                <input type='text' placeholder='Search...'/>

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