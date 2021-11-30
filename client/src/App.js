import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import IngredientsOnHand from './components/IngredientsOnHand';

import Home from './pages/Home';

import Recipe from './pages/Recipe/Recipe';
import RecipesList from './pages/RecipesList';
import SearchRecipes from './pages/SearchRecipes';
import MyRecipesList from './pages/MyRecipesList';
import SearchMyRecipes from './pages/SearchMyRecipes';
import MyRecipesSearchResults from './pages/MyRecipesSearchResults';
import DinnerSelector from './pages/DinnerSelector';
import MyShoppingList from './pages/MyShoppingList';
import RecipesListByIngredients from './pages/RecipesListByIngredients';

class App extends React.Component {

  state = {
    chicken: false,
    beef: false,
    pork: false,
    spinach: false,
    tomatoes: false,
    mushrooms: false,
    potatos: false,
    onions: false,
    garlic: false,
    greenpeppers: false,
    olives: false,
    cabbage: false,
    lettuce: false,
    shoppingList: ['celery', 'lettuce']
  }

  toggleIngredientsOnHand = (e) => {
    this.setState(prevState => ({
      [e.target.name]: !prevState[e.target.name]
    }))
  }

  addToShoppingList = (e, item) => {
    e.preventDefault();
    this.setState({
      shoppingList: [...this.state.shoppingList, item]
    })
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <IngredientsOnHand toggleIngredientsOnHand={this.toggleIngredientsOnHand} ingredients={this.state} />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/recipes/search' exact render={() => <SearchRecipes ingredients={this.state}/> }/>
          <Route path='/recipes/byIngredients/:ingredients' component={RecipesListByIngredients} />
          <Route path='/recipes/:search' component={RecipesList} />
          <Route path='/recipe/:recipeId' render={() => <Recipe addToShoppingList={this.addToShoppingList} /> } />
          <Route path='/myrecipes/all' exact component={MyRecipesList} />
          <Route path='/myrecipes/search' exact component={SearchMyRecipes} />
          <Route path='/myrecipes/:search' exact component={MyRecipesSearchResults} />
          <Route path='/dinnerselector/:ingredients' render={(renderProps) => <DinnerSelector ingredients={this.state} {...renderProps}/>} />
          <Route path='/myshoppinglist' render={() => <MyShoppingList shoppingList={this.state.shoppingList} addToShoppingList={this.addToShoppingList} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
