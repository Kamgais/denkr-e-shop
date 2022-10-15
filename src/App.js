import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Product/Products';
import ProductShowCase  from './Components/ProductShowCase/ProductShowCase'
import Favorites from './Components/Favorites/Favorites'







function App() {



  return (
    <>





    <Navbar/>

    
    <Routes>
     
    
   
    <Route  path='/'  element={<Products/>}/>
    <Route  path='/products/:id'  element={<ProductShowCase/>}/>
    
    <Route  path='/favorites'  element={<Favorites/>}/>


   

   </Routes>

 
  
   </>

  
  );
}

export default App;

