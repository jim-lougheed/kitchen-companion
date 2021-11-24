import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './Home.scss';



class Home extends React.Component {

    state = {
        recipes: [],
        searchInput: null
    }

    componentDidMount () {
        axios
            .get(`http://localhost:8080/`)
            .then((res) => {
                this.setState({
                    recipes: res.data
                })
            })

}

    handleSearch = (e) => {
        e.preventDefault();
        const searchText = {
            "search": this.state.searchInput
        };
        axios
        .post(`http://localhost:8080/recipes`, searchText)
        .then((response) => {
        this.setState({
            recipes: response.data
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