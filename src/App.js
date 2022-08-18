import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import AboutUs from './AboutUs';
import './App.css';
import FindRecipe from './FindRecipe';
import Shop from './Shop';
import logo from './logo.jpeg';

function App() {
  return <Router>
    <div className='logo'>
      <img src={logo} width="500px" alt="logo"/>
    </div>
    

    <nav className='nav'>
      <Link to="/" className='link'>Find recipe</Link>
      <Link to="/shop" className='link'>Buy food</Link>
      <Link to="/about_us" className='link'>Read more about us</Link>
    </nav>

    <Routes>
      <Route path='/' element={<FindRecipe/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about_us' element={<AboutUs/>}/>
    </Routes>

  </Router>


}

export default App;
