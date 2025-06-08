import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    Box,
    Divider,
    Card,
    CardMedia,
    CardContent,
  } from '@mui/material';

  import { useNavigate } from 'react-router-dom';
  import { Stack } from '@mui/material';
import Footer2 from './footer2';
import { useCart } from './ CartContext';

const Detail = ({ product }) => {
    console.log(product ,"77 hhhh" )

    const navigate = useNavigate();
    const { showCart } = useCart();



    //add to cart counter
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  
    const addToCart = () => {
      const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
      // Check if item already exists
      const itemIndex = existingCart.findIndex(item => item.name === product.name);
    
      if (itemIndex !== -1) {
        // Update quantity
        existingCart[itemIndex].quantity += quantity;
      } else {
        // Add new item
        existingCart.push({
          name: product.name,
          quantity,
          price: product.price,
          image: product?.image?.desktop?.replace('./assets', '/assets') || '', // handle optional chaining
        });
      }
    
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
    
     // alert(`Added ${quantity} x ${product.name} to cart!`);
     showCart();

    };


  return (
    <> 
    <Box sx={{ px: "10%" }}>
    {/* 1. Back Button */}
    <Button variant="text" sx={{ mb: 4, color:"text.third", textDecoration:"none" }} onClick={() => navigate(-1)}>&larr; Go Back</Button>
  
    {/* 2. Product Main Info */}
    <Grid container spacing={6}>
  <Grid size={{ xs: 12, md: 6 }}>
  <Box
          component="img"
          src={product?.image?.desktop?.replace('./assets', '/assets')}
          alt={product.name}
          sx={{ width: '100%', borderRadius: 2 }}
        />
  </Grid>


  
  <Grid size={{ xs: 12, md:6 }} sx={{padding:"10%",}} justifyContent="center">
  {product.new && (


          <Typography variant="overline" color="text.secondary" gutterBottom>
            NEW PRODUCT
          </Typography>
        )}
        <Typography variant="h4" fontWeight={700}>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.third" mt={2}>
          {product.description}
        </Typography>
        <Typography variant="h6" fontWeight={700} mt={3}>
          ${product.price.toLocaleString()}
        </Typography>
  
        {/* Quantity & Add to Cart */}
        <Stack direction="row" spacing={2} mt={2} alignItems="center">
      {/* Quantity Selector */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          padding: '8px 16px',
          borderRadius: 1,
          gap: 2,
          height: 40,
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: '#aaa', cursor: 'pointer' }}
          onClick={decrement}
        >
          –
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {quantity}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#aaa', cursor: 'pointer' }}
          onClick={increment}
        >
          +
        </Typography>
      </Box>

      {/* Add to Cart Button */}
      <Button
        variant="contained"
        onClick={addToCart}
        sx={{
          backgroundColor: '#dd7b46',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          padding: '10px 24px',
          '&:hover': {
            backgroundColor: '#c46d3e',
          },
        }}
      >
        Add to Cart
      </Button>
    </Stack>
  </Grid>
     {/* 3. Features & In The Box */}
  <Grid size={{ xs: 12, md: 7 }}>
  <Typography variant="h6" fontWeight={700}>
          FEATURES
        </Typography>
        <Typography mt={2} color="text.third" whiteSpace="pre-line">
          {product.features}
        </Typography>
  </Grid>
  <Grid size={{ xs: 12, md: 5 }}>
  <Typography variant="h6" fontWeight={700}>
          IN THE BOX
        </Typography>
        <Stack spacing={1} mt={2}>
          {product.includes.map((item, i) => (
            <Typography key={i}>
              <Box component="span" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                {item.quantity}x
              </Box>{' '}
              {item.item}
            </Typography>
          ))}
        </Stack>
  </Grid>
    {/* 4. Gallery */}
  
    <Grid container spacing={6} mt={10} justifyContent="center" size={{ xs: 12, md: 12 }}>
      <Grid item xs={6} sm={6} md={6} >
        <Stack spacing={6}>
          <Box
            component="img"
            src={product.gallery.first.desktop.replace('./assets', '/assets')}
            alt="Gallery 1"
            sx={{ width: '100%', borderRadius: 2 ,objectFit: 'cover'}}
          />
          <Box
            component="img"
            src={product.gallery.second.desktop.replace('./assets', '/assets')}
            alt="Gallery 2"
            sx={{ width: '100%', borderRadius: 2,objectFit: 'cover' }}
          />
        </Stack>
      </Grid>
      <Grid item xs={6} md={4} sm={4} >
        <Box
          component="img"
          src={product.gallery.third.desktop.replace('./assets', '/assets')}
          alt="Gallery 3"
          sx={{ width: '100%', borderRadius: 2, objectFit: 'cover' }}
        />
      </Grid>
    </Grid>
  
   <Grid container size={{ xs: 12, md: 12 }}  justifyContent="center">
    {/* 5. You May Also Like */}
    <Box mt={10}>
  <Typography variant="h6" align="center" fontWeight={700} gutterBottom>
    YOU MAY ALSO LIKE
  </Typography>
  <Grid container spacing={6} justifyContent="center">
    {product.others.map((item, i) => (
      <Grid
        item
        size={{ xs: 12, sm: 4, md: 4 }}
        textAlign="center"
      >
        <Box
          component="img"
          src={item.image.desktop.replace('./assets', '/assets')}
          alt={item.name}
          sx={{
            width: '100%',
            maxWidth: 350,
            borderRadius: 2,
            mx: 'auto',
           justifyContent:"center",
          }}
        />
        <Typography mt={2} fontWeight={700}>
          {item.name}
        </Typography>
        <Button variant="contained" sx={{ mt: 1 }}>
          SEE PRODUCT
        </Button>
      </Grid>
    ))}
  </Grid>
</Box>
  </Grid>

</Grid>







   
  
 

  
  

  
   
  </Box>
  <Footer2/></>

  )
}

export default Detail
