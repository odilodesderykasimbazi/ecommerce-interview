import React, { useEffect, useState } from "react";

import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from "react-router-dom";



import "../styles.css";

export default function Home() {
	const navigate = useNavigate();

	const openProductDetails = (product) => {
	  navigate(`/product`, {state: product});
	};
  
	const [products, setProducts] = useState([])
	const fetchData = async () => {
	  const response = await fetch("https://fakestoreapi.com/products")
	  const data = await response.json()
	  setProducts(data)
	}
  
	useEffect(() => {
	  fetchData()
	}, [])

  return (
	
	<Box sx={{ flexGrow: 1, p: 2 }}>
	  {products.length > 0 && (
		<Grid
		container
		spacing={2}
		sx={{
		  '--Grid-borderWidth': '1px',
		  // borderTop: 'var(--Grid-borderWidth) solid',
		  // borderLeft: 'var(--Grid-borderWidth) solid',
		  borderColor: 'divider',
		  '& > div': {
			// borderRight: 'var(--Grid-borderWidth) solid',
			// borderBottom: 'var(--Grid-borderWidth) solid',
			borderColor: 'divider',
		  },
		}}
	  >
	  {/* {[...Array(6)].map((_, index) => ( */}
	  {products.map(product => (
		<Grid 
		  key={product.id} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} 
		  minHeight={160}
		  onClick={() => openProductDetails({product})}
		>
		  <Box 
			component="img" 
			src={product.image} 
			alt={product.title} 
			sx={{ height: "250px", width: "200px" }} 
		  />
		  <Typography variant="h5" component="h6">
			{product.title}
		  </Typography>
		  <Typography variant="h5" component="h6">
			{product.price}
		  </Typography>
		  </Grid>
	  ))}
		
	  {/* ))} */}
	</Grid>
	  )}
	
  </Box>
  );
}
