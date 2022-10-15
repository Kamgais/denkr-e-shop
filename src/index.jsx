import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductListContext from './Context/ProductListContext';
import ShoppingBarContext from './Context/ShoppingBarContext';
import {Provider} from 'react-redux'
import store from './redux/store';








const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
 
     <BrowserRouter>
    <ProductListContext>
      <ShoppingBarContext>
    <Provider store = {store}>
    <App />
    </Provider> 
    </ShoppingBarContext>
    </ProductListContext>
    </BrowserRouter>

     
    
 
);

