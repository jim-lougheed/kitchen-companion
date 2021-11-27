import './App.css';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <IngredientsOnHand />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/recipes' exact component={SearchRecipes} />
          <Route path='/recipes/:search' component={RecipesList} />
          <Route path='/recipe/:recipeId' component={Recipe} />
          <Route path='/myrecipes/all' exact component={MyRecipesList} />
          <Route path='/myrecipes' exact component={SearchMyRecipes} />
          <Route path='/myrecipes/:search' component={MyRecipesSearchResults} />
          <Route path='/dinnerselector' component={DinnerSelector} />
          <Route path='/myshoppinglist' component={MyShoppingList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
