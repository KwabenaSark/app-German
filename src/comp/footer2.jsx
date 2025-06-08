import { Box, Card, Grid, Paper, Typography, IconButton,useTheme ,useMediaQuery,Button} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from '/src/assets/shared/desktop/logo.svg';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000', 
  textAlign: 'center',
  padding: theme.spacing(2),
  color: '#fff',
  display: 'flex',
  justifyContent: '',
  gap: theme.spacing(2),
}));

const WhiteIconButton = styled(IconButton)({
  color: '#fff',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#FBA24F', 
  },
});
const Footer2 = () => {



  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'HEADPHONES', path: '/headphones' },
    { label: 'SPEAKERS', path: '/speakers' },
    { label: 'EARPHONES', path: '/earphones' },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // true on xs and sm
  return (
    <div>

      <br />
      <br />
      <br />
       <Grid container spacing={2}>


        

<Grid container size={12} justifyContent="center" sx={{ px: '10%' }}>
  
  <Grid size={{  sm: 4, xs: 12, md: 4 }}>
  <Card
    sx={{
      borderRadius: 3,
      padding: 4,
      textAlign: 'center',
      boxShadow: 'none',
      backgroundColor: '#f1f1f1',
      maxWidth: 500,
      margin: 'auto',
    }}
  >
    {/* Headphone Image */}
    <Box
      component="img"
      src="/src/assets/shared/desktop/image-category-thumbnail-headphones.png" // replace with your actual path
      alt="Headphones"
      sx={{
        height: 180,
        objectFit: 'contain',
        mb: 3,
      }}
    />

    {/* Label */}
    <Typography
      variant="h6"
    
    >
      HEADPHONES
    </Typography>

    {/* Shop Link with Arrow */}
    <Button
      component={Link}
      to="/headphones"
      endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
      sx={{
        textTransform: 'none',
        color: '#7d7d7d',
        fontWeight: 600,
        fontSize: 14,
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#D87D4A',
        },
      }}
    >
      SHOP
    </Button>
  </Card>
</Grid>
<Grid size={{ sm: 4, xs: 12, md: 4 }}>
<Card
    sx={{
      borderRadius: 3,
      padding: 4,
      textAlign: 'center',
      boxShadow: 'none',
      backgroundColor: '#f1f1f1',
      maxWidth: 500,
      margin: 'auto',
    }}
  >
    {/* Headphone Image */}
    <Box
      component="img"
      src="/src/assets/shared/desktop/image-category-thumbnail-speakers.png" // replace with your actual path
      alt="Headphones"
      sx={{
        height: 180,
        objectFit: 'contain',
        mb: 3,
      }}
    />

    {/* Label */}
    <Typography
      variant="h6"
    
    >
      SPEAKER
    </Typography>

    {/* Shop Link with Arrow */}
    <Button
      component={Link}
      to="/headphones"
      endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
      sx={{
        textTransform: 'none',
        color: '#7d7d7d',
        fontWeight: 600,
        fontSize: 14,
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#D87D4A',
        },
      }}
    >
      SHOP
    </Button>
  </Card>
</Grid>
 <Grid size={{ sm: 4, xs: 12, md: 4 }}>
 <Card
    sx={{
      borderRadius: 3,
      padding: 4,
      textAlign: 'center',
      boxShadow: 'none',
      backgroundColor: '#f1f1f1',
      maxWidth: 500,
     
      margin: 'auto',
    }}
  >
    {/* Headphone Image */}
    <Box
      component="img"
      src="src/assets/shared/desktop/image-category-thumbnail-earphones.png" // replace with your actual path
      alt="Headphones"
      sx={{
        height: 180,
        objectFit: 'contain',
        mb: 3,
      }}
    />

    {/* Label */}
    <Typography
      variant="h6"
    
    >
      EARPHONES
    </Typography>

    {/* Shop Link with Arrow */}
    <Button
      component={Link}
      to="/earphones"
      endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
      sx={{
        textTransform: 'none',
        color: '#7d7d7d',
        fontWeight: 600,
        fontSize: 14,
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#D87D4A',
        },
      }}
    >
      SHOP
    </Button>
  </Card>
</Grid>
</Grid>





     {/* Top card */}
     <Grid container size={12} rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }} sx={{ px: '10%' }} >
   
   <Grid  size={{  sm: 6, xs: 12, md: 6 }}>
   <Grid
 container
 sx={{
   padding:"15%",
   textAlign: 'left',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '100%',
 }}
>
 <Grid item xs={12}>
   <Box>
   <Typography variant="h3">
 Bringing you the <Box component="span" sx={{ color: '#D87D4A' }}>best</Box> audio gear
</Typography>
     <Typography variant="body1" sx={{ mt: 1 }}>
     Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
     </Typography>
   </Box>
 </Grid>
</Grid>



 </Grid>

 <Grid  size={{  sm: 6, xs: 12, md: 6 }}>
 <Box
 component="img"
 src="src/assets/shared/desktop/image-best-gear.jpg" // replace with your actual path
 sx={{
   width: '100%',        // Makes it responsive inside its grid cell
   height: 'auto',       // Maintains aspect ratio
   objectFit: 'contain', // Ensures image stays contained
   mb: 3,
   display: 'block',     // Removes inline spacing
 }}
/>
 </Grid>
 </Grid>

 {/* Footer */}
<Grid size={12} >
<Card
     sx={{
       backgroundColor: '#000',
       color: '#fff',
       borderRadius: 0,
       minHeight: '100%',
       paddingLeft:"10%",
       paddingRight:"10%",
       paddingTop:"2%",
     
     }}
   >
<Grid container spacing={2}>
 <Grid size={{  sm: 6, xs: 12, md: 6 }}>
   <Box component={Link} to="/" sx={{ display: 'inline-block' }}>
              <Box
                component="img"
                src={logo}
                alt="audiophile logo"
                sx={{ height: 24, objectFit: 'contain' }}
              />
            </Box>
 </Grid>
 <Grid container size={{ sm: 6, xs: 12, md: 6 }}>
 <Box  sx={{
           display: 'flex',
           flexDirection: 'row',
           gap: 2,
           justifyContent:  'flex-end',
           alignItems:'center',
         
         }}>
             {navLinks.map((item) => (
               <Typography
                 key={item.label}
                 component={Link}
                 to={item.path}
                 sx={{
                   color: '#fff',
                   textDecoration: 'none',
                   fontSize: '14px',
                   letterSpacing: '1px',
                   fontWeight: 500,
                   '&:hover': { textDecoration: 'underline' },
                 }}
               >
                 {item.label}
     
               </Typography>
             ))}
           </Box>
 </Grid>
   <Grid size={{ sm: 6, xs: 12, md: 6 }}>
   <Typography variant="body1" sx={{ color: '#888',my: 3, maxWidth: 400 }}>

   Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
   </Typography>
 </Grid>
  <Grid size={{ sm: 6, xs: 12, md: 6 }}>
  <Item>
     <WhiteIconButton>
       <FacebookIcon />
     </WhiteIconButton>
     <WhiteIconButton>
       <TwitterIcon />
     </WhiteIconButton>
     <WhiteIconButton>
       <InstagramIcon />
     </WhiteIconButton>
   </Item>
 </Grid>
     <Grid size={{ sm: 6, xs: 12, md: 6 }}>
     <Typography variant="body1" sx={{color: '#888', my: 3, maxWidth: 400 }}>

     Copyright 2021. All Rights Reserved
</Typography>
 </Grid>
</Grid>


   </Card>
</Grid>
 
</Grid> 
    </div>
  )
}

export default Footer2
