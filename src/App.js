import './App.css';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

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
          
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route  path="/products">
              <ProductListPage />
            </Route>

            <Route  path="/product/:id">
              <ProductDetailPage />
            </Route>

            <Route  path="/basket">
              <BasketPage />
            </Route>

          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
