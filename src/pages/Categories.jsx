import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Footer2 from '../comp/footer2';
import data from '../data.json'; 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));


const Headphones = () => {

  const H = [2, 4, 3];
  const S = [5,6];
  const E = [1];

  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productType, setProductType] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    let name = "";
    let ids = [];

    if (location.pathname === "/headphones") {
      name = "Headphones";
      ids = H;
    } else if (location.pathname === "/speakers") {
      name = "Speakers";
      ids = S;
    } else if (location.pathname === "/earphones") {
      name = "Earphones";
      ids = E;
    }

    if (name) {
      localStorage.setItem("productType", name);
      setProductType(name);
    }

    const filtered = data.filter((item) => ids.includes(item.id));
    setFilteredProducts(filtered);
  }, [location.pathname]);
  return (
    <div>
    <Grid container spacing={2}>
<Grid size={12}>
  <Box
  style={{backgroundColor:"black", height:"10vh", justifyItems:"center", textAlign:"center", padding:"10%", }}
  >
<Typography sx={{color:"white", width:"100%", fontSize:"150%"}}  variant="h2">{productType}</Typography>

  </Box>
</Grid>
<Grid size={12} container justifyContent="center" sx={{ px: '10%' }}>
{filteredProducts.map((product, index) => (
  <Grid container  size={12} spacing={8} sx={{ px: '10%' }} key={product.id} justifyContent="center">
    <Grid item size={{ xs: 12, sm: 12, md: 6 }}  >
      <Box
        component="img"
        src={product?.image?.desktop?.replace('./assets', 'src/assets')}
        alt={product.name}
        sx={{ width: '100%', borderRadius: 2 }}
      />
    </Grid>

    <Grid item size={{ xs: 12, sm: 12, md: 6 }} sx={{ paddingTop: '8%' }} justifyContent="center">
      {index === 0 && (
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
      <Button
          variant="contained"
          sx={{ mt: 1 }}
          onClick={() => {
            console.log("Selected ID:", product.id);
            localStorage.setItem('selectedProductId', product.id);
            navigate('/detail');
          }}
        >
          SEE PRODUCT
        </Button>
    </Grid>
  </Grid>
))}
    {/* <Grid size={{ xs: 12, md: 6 }}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid size={{ xs: 12, md:6 }}>
    <Item>xs=6 md=8</Item>
  </Grid>
    <Grid size={{ xs: 12, md: 6 }}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid size={{ xs: 12, md:6 }}>
    <Item>xs=6 md=8</Item>
  </Grid> */}
</Grid>
<Grid size={12}>
 <Footer2/>
</Grid>
 
</Grid>
  </div>
  )
}

export default Headphones
