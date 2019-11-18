import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
// data is an array of product objects with id, title, price, and image props
const [products] = useState(data);
// keeps track of all the items in our cart
  const [cart, setCart] = useState([]);
// takes in an item and adds it to our cart array
  const addItem = item => {
	  setCart([...cart, item]);
  };

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={{ cart }}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={ Products }
					/>

					<Route
						path="/cart"
						component={ ShoppingCart }
					/>
				</div>
				</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
