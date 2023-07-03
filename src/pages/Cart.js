import React, { useReducer } from 'react';
import {Box, Typography, Button} from '@mui/material';
import {useLocation} from 'react-router-dom';

import "../styles.css";

export default function Cart() {
	const location = useLocation();
	const { productCart = {} } = location.state.product || {}; // <-- provide fallback value
	const products = [
		{
			"id":1394894,
			"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
			"price":109.95,
			"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
			"category":"men's clothing",
			"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			"rating":{
			   "rate":3.9,
			   "count":120
			}
		 },
		// location.state.product
	]

	products.push(productCart)

	function getTotal(cart) {
		return cart.reduce((totalCost, item) => totalCost + item.price, 0);
	}
	
	function shoppingCartReducer(state, action) {
		switch(action.type) {
			case 'add':
				return [...state, action.product];
			case 'remove':
				const productIndex = state.findIndex(item => item.name === action.product.name);
				if(productIndex < 0) {
				return state;
				}
				const update = [...state];
				update.splice(productIndex, 1)
				return update
			default:
				return state;
			}
		}
	
	function getTotalSelectedAmountPerProduct(cart, productName) {
		return cart.filter(item => item.title === productName).length;
	}
	
	// export default function Product() {
	const [cart, setCart] = useReducer(shoppingCartReducer, []);
	
	function add(product) {
		const action = { product, type: 'add' };
		setCart(action);
	}
	
	function remove(product) {
		const action = { product, type: 'remove' };
		setCart(action);
	}

  return (
    <div className="wrapper">
     <div className="shoppingcart">
       <strong>Shopping Cart</strong>
       <div>
          {cart.length} total items
       </div>
       <div>Total price: {getTotal(cart)} Euro</div>
     </div>
     <div>
       {products.map(product => (
         <div key={product.id}>
           <div className="product">
		   <Box 
		   		key={product.id}
				component="img" 
				src={product.image} 
				alt={product.title} 
				sx={{ height: "250px", width: "200px" }} 
		   />

               {/* <span role="img" aria-label={product.title}>{product.image}</span> */}
           </div>
           <div className="selectproduct">
             <button onClick={() => add(product)}>+</button><b>{getTotalSelectedAmountPerProduct(cart, product.title)}</b>
             <button onClick={() => remove(product)}>-</button>
           </div>
         </div>
       ))}
     </div>
     <br></br>
     <div className="checkout"><button>Checkout</button></div>
     <br></br>
   </div>
  );
}
