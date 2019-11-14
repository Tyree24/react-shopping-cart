import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//Contexts
import { ProductContextProvider } from './contexts/ProductContext.js';
import { CartContextProvider } from './contexts/CartContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {


	return (
		<ProductContextProvider>
		<CartContextProvider>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</div>
			</CartContextProvider>
		</ProductContextProvider>
	);
}

export default App;
