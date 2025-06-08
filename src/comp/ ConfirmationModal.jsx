import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  Divider,
  Fade,
  Backdrop,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';


const ConfirmationModal = ({ open, onClose, items, grandTotal }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 1);
  const navigate = useNavigate();

  const handleBack = () => {
    onClose();         // Optional: close the modal before navigating
    navigate('/'); // Navigate to the home page
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            width: '90%',
            maxWidth: 480,
            boxShadow: 24,
            outline: 'none',
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 50, color: '#D87D4A', mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            THANK YOU FOR YOUR ORDER
          </Typography>
          <Typography color="text.primary" mb={3}>
            You will receive an email confirmation shortly.
          </Typography>

          {/* Summary Section */}
          <Box
            sx={{
              display: 'flex',
              bgcolor: '#f1f1f1',
              borderRadius: 2,
              overflow: 'hidden',
              mb: 3,
              flexDirection: ['column', 'row'],
            }}
          >
            {/* Items */}
            <Box sx={{ flex: 1, p: 2 }}>
              {visibleItems.map((item, index) => (
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  key={index}
                  sx={{ mb: 2 }}
                >
                  <Grid item>
                    <Avatar
                      src={item.image}
                      variant="rounded"
                      sx={{ width: 50, height: 50 }}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography fontWeight="bold">{item.name}</Typography>
                    <Typography color="text.primary">
                      ${item.price.toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="text.secondary">
                      x{item.quantity}
                    </Typography>
                  </Grid>
                </Grid>
              ))}

              {items.length > 1 && (
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? 'View less' : `and ${items.length - 1} other item(s)`}
                </Typography>
              )}
            </Box>

            {/* Grand Total */}
            <Box
              sx={{
                bgcolor: 'black',
                color: 'white',
                flex: 1,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="#888">
                GRAND TOTAL
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ${grandTotal.toLocaleString()}
              </Typography>
            </Box>
          </Box>

          {/* Back Button */}
          <Button
  fullWidth
  variant="contained"
  onClick={handleBack}
  sx={{ bgcolor: '#D87D4A', '&:hover': { bgcolor: '#c56e3b' } }}
>
  BACK TO HOME
</Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ConfirmationModal;
