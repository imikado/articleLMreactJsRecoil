import './App.css';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Menu from './components/Menu/Menu';
import BasketCount from './components/BasketCount/BasketCount';

import HomePage from './pages/Home/HomePage';
import ProductListPage from './pages/ProductList/ProductListPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import BasketPage from './pages/Basket/BasketPage';


function App() {


  return (
    <div className="App">
        <Router>
          <Menu></Menu>

          <BasketCount></BasketCount>
          
          <Routes>
          <Route exact path="/"  element={
              <HomePage />
	  }
	  />

          <Route  path="/products" element={
              <ProductListPage />
	  }
	  />

          <Route  path="/product/:id"  element={
              <ProductDetailPage />
          }
	  />

          <Route  path="/basket"  element={
              <BasketPage />
	  }
	  />

          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
