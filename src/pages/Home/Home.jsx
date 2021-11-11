import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


import './Home.scss';



class Home extends React.Component {

    state = {
        recipes: [],
        searchInput: null
    }

    componentDidMount () {
        axios
        .get('https://edamam-recipe-search.p.rapidapi.com/search?rapidapi-key=b2e361a7f1msh110861480bc9495p138735jsne1578e2d3c8a&q=cake')
        .then((response) => {
            this.setState({
                recipes: response.data.hits
        }
        )
    })
}

    handleSearch = (e) => {
        e.preventDefault();
        const searchText = this.state.searchInput;
        axios
        .get(`https://edamam-recipe-search.p.rapidapi.com/search?rapidapi-key=b2e361a7f1msh110861480bc9495p138735jsne1578e2d3c8a&q=${searchText}`)
       .then((response) => {
        this.setState({
            recipes: response.data.hits
        })
    })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            searchInput: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Search Recipes</h1>
                <form onClick={this.handleSearch}>
                    <input type='text' name='search' placeholder="What's cookin'?" onChange={this.handleChange}/>
                    <button type='submit' >Search</button>
                </form>
                <ul className='recipe-container'>
                    {this.state.recipes.map((recipe) => <li
                    className='recipe'>
                    <Link to={'/' + (recipe.recipe.uri.substr(51,50))}><h1>{recipe.recipe.label}</h1></Link>
                    <img src={recipe.recipe.image} />
                    <p>{recipe.recipe.ingredients.length} ingredients</p>
                    </li>)}
                </ul>
            </>
        )
    }
}

export default Home;