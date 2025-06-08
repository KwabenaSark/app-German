import { Button, Card, CardContent, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography,Stack } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import footer from '../comp/footer';
import nav from '../comp/nav';
import Nav from '../comp/nav';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '../comp/footer';
import data from '../data.json'; 
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

const Home = () => {

    const navigate = useNavigate();

    const handleSeeProduct = (productId) => {
      localStorage.setItem('selectedProductId', productId);
      navigate('/detail');
    };
    

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));        // ≤600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));         // ≥900px
    
    // Determine the folder name based on screen size
    let deviceFolder = 'desktop';
    if (isMobile) {
      deviceFolder = 'mobile';
    } else if (isTablet) {
      deviceFolder = 'tablet';
    }
    
    // Dynamically generate image URL
    const imageUrl = `/src/assets/home/${deviceFolder}/image-header.jpg`;
    const backgroundSize = 'cover';

    const img1=`/src/assets/home/${deviceFolder}/image-speaker-zx9.png`
     const img2=`src/assets/home/${deviceFolder}/image-speaker-zx7.jpg`
       const img3=`/src/assets/home/desktop/pattern-circles.svg`
    
 const img4=`/src/assets/home/${deviceFolder}/image-earphones-yx1.jpg`
  return (
    <div>
      <Grid container spacing={2}>

{/* Navigation and top card */}
  <Grid size={12} >
  <Card
  sx={{
    px: '10%', // 10% left and right padding
    py: { xs: 6, md: 10 },
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${imageUrl})`,
    backgroundSize: backgroundSize,
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 0,
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.4s ease-in-out',

  }}
>
  <Grid container spacing={4}>
    {/* Left Side - Text */}
    <Grid item xs={12} md={6}>
      <CardContent sx={{ maxWidth: 400 }}>
        <Typography
          variant="subtitle2"
          sx={{ letterSpacing: '0.3em', color: '#888', mb: 2 }}
        >
          NEW PRODUCT
        </Typography>

        <Typography variant="h1">
          XX99 MARK II
          <br />
          HEADPHONES
        </Typography>

        <Typography
          variant="body1"
          sx={{ my: 3, color: '#ccc' }}
        >
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </Typography>

        <Button variant="contained" onClick={() => handleSeeProduct(4)}>SEE PRODUCT</Button>
      </CardContent>
    </Grid>

    {/* Right side left empty to balance layout */}
    <Grid item xs={12} md={6}></Grid>
  </Grid>
</Card>
  </Grid>





  {/* Categories */}
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
        src="/src/assets/shared/desktop/image-category-thumbnail-headphones.png" 
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
  </Grid>




  {/* Bold cards */}
   <Grid  size={12}   sx={{ px: '10%' }}>
   <Box
      sx={{
        backgroundColor: '#D87D4A',
        borderRadius: 2,
        px: 6,
        py: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 0 },
        position: 'relative',
        overflow: 'hidden',
        height: { xs: "100%", md: "20rem" },
        overlay:"none",
      }}
    >
      {/* Decorative Circles */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${img3})`,
          // backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundSize: '300px 300px',
          zIndex: 0,
        }}
      />

      {/* Speaker Image */}
      <Box
        component="img"
        src={img1}
        alt="ZX9 Speaker"
        sx={{
          width: { xs: '60%', md: '30%' },
          zIndex: 1,
          paddingLeft:  { xs: 0, md: "10%" },
          paddingTop:  { xs: 0, md: "10%" },
        }}
      />

      {/* Text and Button */}
      <Stack spacing={2} sx={{ zIndex: 1, maxWidth: 400 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white' }}>
          ZX9<br />SPEAKER
        </Typography>
        <Typography sx={{ color: 'white', opacity: 0.75 }}>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: 0,
            px: 4,
            py: 1.5,
            width: 'fit-content',
            '&:hover': {
              backgroundColor: '#4d4d4d',
            },
          }}
          onClick={() => handleSeeProduct(6)}
        >
          SEE PRODUCT
        </Button>
      </Stack>
    </Box>
  </Grid>
   <Grid size={12}  sx={{ px: '10%' }}>
   <Box
  sx={{
    backgroundColor: '#F1F1F1',
    backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 2,
    px: 6,
    py: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 0 },
    position: 'relative',
    overflow: 'hidden',
  }}
>
     
     
      {/* Speaker Image */}
     

      {/* Text and Button */}
      <Stack spacing={2} sx={{ zIndex: 1, maxWidth: 400 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>
        ZX7 SPEAKER
        </Typography>
       
        <Button
          variant="outlined"
          sx={{
            
            color: 'black',
            borderRadius: 0,
            px: 4,
            py: 1.5,
            width: 'fit-content',
            '&:hover': {
              backgroundColor: '#4d4d4d',
            },
          }}
          onClick={() => handleSeeProduct(5)}
        >
          SEE PRODUCT
        </Button>
      </Stack>
    </Box>
  </Grid>







  {/* Dynamic card on top of footer */}
   <Grid container size={12} rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}  sx={{ px: '10%' }} >
   
    <Grid  size={{  sm: 6, xs: 12, md: 6 }}>
    <Box
  sx={{
    backgroundColor: '#F1F1F1',
    backgroundImage: `url(${img4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 2,
    px: 6,
    py: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 0 },
    position: 'relative',
    overflow: 'hidden',
    height:"20rem"
  }}
></Box>
  </Grid>
  <Grid  size={{  sm: 6, xs: 12, md: 6 }}>

  <Box
  sx={{
    backgroundColor: '#F1F1F1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 2,
    px: 6,
    py: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 0 },
    position: 'relative',
    overflow: 'hidden',
     height:"20rem"
  }}
>
  <Stack spacing={2} sx={{ zIndex: 1, maxWidth: 400 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>
        YX1 EARPHONES
        </Typography>
       
        <Button
          variant="outlined"
          sx={{
            
            color: 'black',
            borderRadius: 0,
            px: 4,
            py: 1.5,
            width: 'fit-content',
            '&:hover': {
              backgroundColor: '#4d4d4d',
            },
          }}
          onClick={() => handleSeeProduct(1)}
        >
          SEE PRODUCT
        </Button>
      </Stack>
      </Box>
  </Grid>
  </Grid>
  









  {/* for footer import */}
   <Grid size={12}>
    <Footer/>
  </Grid> 
</Grid>


    </div>
  )
}

export default Home
