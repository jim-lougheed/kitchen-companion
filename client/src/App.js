import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import Navbar from './components/Navbar';
import IngredientsOnHand from './components/IngredientsOnHand';

import Home from './pages/Home';
import Login from './components/Login/Login';

import Recipe from './pages/Recipe/Recipe';
import RecipesList from './pages/RecipesList';
import SearchRecipes from './pages/SearchRecipes';
import MyRecipesList from './pages/MyRecipesList';
import SearchMyRecipes from './pages/SearchMyRecipes';
import MyRecipesSearchResults from './pages/MyRecipesSearchResults';
import DinnerSelector from './pages/DinnerSelector';
import MyShoppingList from './pages/MyShoppingList';
import RecipesListByIngredients from './pages/RecipesListByIngredients';
import PageFooter from './components/PageFooter';

import './App.scss';

const { Header, Content, Sider, Footer } = Layout;

class App extends React.Component {

  state = {
    beef: false,
    chickpeas: false,
    chicken: false,
    lamb: false,
    pork: false,
    soyprotein: false,
    tempeh: false,
    tofu: false,

    artichokes: false,
    beets: false,
    broccoli: false,
    brusselssprouts: false,
    cabbage: false,
    carrots: false,
    celery: false,
    corn: false,
    cucumber: false,
    eggplant: false,
    garlic: false,
    greenpeppers: false,
    leek: false,
    lettuce: false,
    mushrooms: false,
    olives: false,
    onions: false,
    peppers: false,
    potatos: false,
    radish: false,
    spinach: false,
    sweetpotato: false,
    tomatoes: false,
    zucchini: false,
    
    apples: false,
    bananas: false,
    blueberries: false,
    cherries: false,
    grapes: false,
    mango: false,
    orange: false,
    pomegranate: false,
    raspberries: false,
    strawberries: false,
    watermelon: false,

    almondmilk: false,
    butter: false,
    cheese: false,
    cream: false,
    milk: false,
    oatmilk: false,
    soymilk: false,

    oats: false,
    orzo: false,
    quinoa: false,
    rice: false,

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

  deleteFromShoppingList = (e, item) => {
    e.preventDefault();
    const newList = this.state.shoppingList.filter((listItem) => {
      return listItem !== item
    })
    this.setState({
      shoppingList: newList
    })
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <Layout>
            <Content>
              <Switch>
                <Route path='/login' exact component={Login} />
                <Route path='/' exact component={Home} />
                <Route path='/recipes/search' exact render={() => <SearchRecipes ingredients={this.state}/> }/>
                <Route path='/recipes/byIngredients/:ingredients' component={RecipesListByIngredients} />
                <Route path='/recipes/:search' component={RecipesList} />
                <Route path='/recipe/:recipeId' render={() => <Recipe addToShoppingList={this.addToShoppingList} /> } />
                <Route path='/myrecipes/all' exact component={MyRecipesList} />
                <Route path='/myrecipes/search' exact component={SearchMyRecipes} />
                <Route path='/myrecipes/:search' exact component={MyRecipesSearchResults} />
                <Route path='/dinnerselector/:ingredients' render={(renderProps) => <DinnerSelector ingredients={this.state} {...renderProps}/>} />
                <Route path='/myshoppinglist' render={() => <MyShoppingList shoppingList={this.state.shoppingList} addToShoppingList={this.addToShoppingList} deleteFromShoppingList={this.deleteFromShoppingList} /> } />
              </Switch>
            </Content>
            <Sider>
              <IngredientsOnHand toggleIngredientsOnHand={this.toggleIngredientsOnHand} ingredients={this.state} />
            </Sider>
          </Layout>
          <Footer>
            <PageFooter />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
