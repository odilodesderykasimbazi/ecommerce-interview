import React from "react";
import {Box, Typography, Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from "react-router-dom";

import {useLocation} from 'react-router-dom';
import "../styles.css";

export default function Product() {
	const location = useLocation();
	const navigate = useNavigate();

	const openCart = (product) => {
		navigate(`/cart`, {state: product});
	  };

  return (
    // <div>
    //    product Page --- {location.state.product.id}
    // </div>

	<Box sx={{ flexGrow: 1, p: 2 }}>

	  <Grid container spacing={2}>

		{/* IMAGE + PRICE */}
		<Grid xs={8}>
			<Box 
				component="img" 
				src={location.state.product.image} 
				alt={location.state.product.title} 
				sx={{ height: "250px", width: "200px" }} 
		   />

			<Typography variant="h5" component="h6">
				Price: {location.state.product.price}
		    </Typography>

		</Grid>

		{/* TITLE + DESCRIPTION */}
		<Grid xs={4}>
		<Typography variant="h5" component="h6">
			Description
		</Typography>
		<Typography variant="h5" component="h6">
		 Title: {location.state.product.title}
		</Typography>
		<Typography variant="h5" component="h6">
		 Category: {location.state.product.category}
		</Typography>
		<Typography variant="h5" component="h6">
		 Description: {location.state.product.description}
		</Typography>
		<Button 
			variant="contained" 
			onClick={() => openCart({
				"id": location.state.product.id,
				"title": location.state.product.title,
				"price": location.state.product.price,
				"description": location.state.product.description,
				"category": location.state.product.category,
				"image": location.state.product.image,
				"rating": {
					"rate": location.state.product.rating.rate,
					"count": location.state.product.rating.count
				}
			})}
		>Add to Cart
		</Button>
		</Grid>
		
	</Grid>
	
  </Box>
  
  );
}
