// CartModal.jsx
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


const CartModal = ({ open, handleClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, [open]); // Reload cart each time modal opens

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    localStorage.removeItem('cartItems');
    setCartItems([]);
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };
  
  const handleDecrement = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } else {
      // Optional: Remove item when quantity is 1 and user clicks "-"
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '50%', md: '10%' },
          right: { xs: '50%', md: '5%' },
          transform: {
            xs: 'translate(50%, -50%)',
            md: 'none',
          },
          width: 350,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography variant="h6">CART ({cartItems.length})</Typography>
          <Button size="small" onClick={clearCart}>
            Remove all
          </Button>
        </Stack>

        {cartItems.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={2}
            alignItems="center"
            mb={2}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: 64,
                height: 64,
                objectFit: 'cover',
                borderRadius: 1,
                backgroundColor: '#eee',
              }}
            />
            <Box flex={1}>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.name}
              </Typography>
              <Typography variant="body2">
                ${item.price.toLocaleString()}
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small" onClick={() => handleDecrement(index)}>
  <RemoveIcon />
</IconButton>
<Typography>{item.quantity}</Typography>
<IconButton size="small" onClick={() => handleIncrement(index)}>
  <AddIcon />
</IconButton>
            </Stack>
          </Stack>
        ))}

        <Stack direction="row" justifyContent="space-between" mt={3} mb={2}>
          <Typography variant="subtitle2">TOTAL</Typography>
          <Typography variant="subtitle2">
            ${total.toLocaleString()}
          </Typography>
        </Stack>

        <Button fullWidth variant="contained" color="warning"  onClick={() => navigate('/checkout')}>
          CHECKOUT
        </Button>
      </Box>
    </Modal>
  );
};

export default CartModal;