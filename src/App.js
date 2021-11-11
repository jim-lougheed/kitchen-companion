import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import Recipe from './pages/Recipe/Recipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>What's for dinner?</h1>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/:recipeId' element={<Recipe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
