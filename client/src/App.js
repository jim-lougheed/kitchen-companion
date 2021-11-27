import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import Recipe from './pages/Recipe/Recipe';
import RecipesList from './pages/RecipesList';
import SearchRecipes from './pages/SearchRecipes';
import MyRecipesList from './pages/MyRecipesList';
import SearchMyRecipes from './pages/SearchMyRecipes';
import MyRecipesSearchResults from './pages/MyRecipesSearchResults';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Dinner's Ready!</h1>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/recipes' exact component={SearchRecipes} />
          <Route path='/recipes/:search' component={RecipesList} />
          <Route path='/recipe/:recipeId' component={Recipe} />
          <Route path='/myrecipes/all' exact component={MyRecipesList} />
          <Route path='/myrecipes' exact component={SearchMyRecipes} />
          <Route path='/myrecipes/:search' component={MyRecipesSearchResults} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
