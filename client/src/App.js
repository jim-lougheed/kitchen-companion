import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import Recipe from './pages/Recipe/Recipe';
import SearchRecipes from './pages/SearchRecipes';
import RecipesList from './pages/RecipesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Dinner's Ready!</h1>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/recipes' exact component={SearchRecipes} />
          <Route path='/recipes/:search' component={RecipesList} />
          <Route path='/:recipeId' component={Recipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
