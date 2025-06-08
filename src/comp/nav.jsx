import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import CartModal from './CartModal';
import { useCart } from './ CartContext'; 


import logo from '/src/assets/shared/desktop/logo.svg';

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { open, showCart, hideCart } = useCart();


  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'HEADPHONES', path: '/headphones' },
    { label: 'SPEAKERS', path: '/speakers' },
    { label: 'EARPHONES', path: '/earphones' },
  ];
 // const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ paddingLeft:"10%", paddingRight:"10%", backgroundColor: '#000', color: '#fff' }} elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', px: isMobile ? 1 : 5 }}>
          
          {/* Left side - Hamburger for mobile */}
          {isMobile ? (
            <IconButton edge="start" onClick={() => setDrawerOpen(true)} sx={{ color: '#fff' }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box component={Link} to="/" sx={{ display: 'inline-block' }}>
            <Box
              component="img"
              src={logo}
              alt="audiophile logo"
              sx={{ height: 24, objectFit: 'contain' }}
            />
          </Box>
          )}

          {/* Center - Logo on mobile */}
          {isMobile && (
            <Box component={Link} to="/" sx={{ display: 'inline-block' }}>
            <Box
              component="img"
              src={logo}
              alt="audiophile logo"
              sx={{ height: 24, objectFit: 'contain' }}
            />
          </Box>
          )}

          {/* Desktop nav links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 4 }}>
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
          )}

          {/* Right - Cart Icon */}
          <>
      <IconButton edge="end" sx={{ color: '#fff' }} onClick={showCart}>
        <ShoppingCartIcon />
      </IconButton>

      <CartModal open={open} handleClose={hideCart} />
    </>
        </Toolbar>
      </AppBar>
      {!isMobile && (
  <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000' }}>
    <Box sx={{ width: '80%', mt: 1 }}>
      <Divider sx={{ bgcolor: '#888', height: '1px' }} />
    </Box>
  </Box>
)}

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, bgcolor: '#000', height: '100%' }} role="presentation">
          <List>
            {navLinks.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                sx={{ color: '#fff' }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Nav;