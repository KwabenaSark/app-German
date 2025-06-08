import React, { useState, useEffect } from 'react';
import Footer2 from '../comp/footer2'
import { Grid } from '@mui/material'
import CartModal from '../comp/CartModal'
import {
    Modal,
    Box,
    Typography,
   Card,
   CardContent,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    Button,
    Paper,
    Stack,
    IconButton,
    Divider,
    Avatar,
  } from '@mui/material';
  import { useForm, Controller } from 'react-hook-form';
  import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ConfirmationModal from '../comp/ ConfirmationModal';

const Checkout = () => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const paymentMethod = watch("paymentMethod", "e-Money");
      const [openModal, setOpenModal] = useState(false);
    
      const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        setOpenModal(true);
      };
      ////////
      const [items, setItems] = useState([]);
      const SHIPPING = 50;
      const VAT_RATE = 0.2;
    
      useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setItems(storedItems);
      }, []);
    
      const getSubtotal = () =>
        items.reduce((total, item) => total + item.price * item.quantity, 0);
    
      const subtotal = getSubtotal();
      const vat = Math.round(subtotal * VAT_RATE);
      const grandTotal = subtotal + SHIPPING;

  return (
    <div>
        <Grid container spacing={6}  sx={{ px: '10%' }}>
<Grid container spacing={8} size={{  sm: 12, xs: 12, md: 8 }}>
<Card  sx={{ p: { xs: 2, md: 4 }, mt: 4, borderRadius:"10px" }}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        CHECKOUT
      </Typography>

      {/* Billing Details */}
      <SectionTitle title="Billing Details" />
      <Grid container spacing={4}>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
            <Typography>Name</Typography>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'gray', // Hover (optional)
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'orange', // On focus
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'gray', // Label default
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'orange', // Label on focus
                    },
                  }}
              />
            )}
          />
        </Grid>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
       <Typography>Email</Typography>
          <Controller
            name="email"
          
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
              
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email Address"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'gray', // Hover (optional)
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'orange', // On focus
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'gray', // Label default
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'orange', // Label on focus
                    },
                  }}
              />
            )}
          />
        </Grid>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
        <Typography>Phone</Typography>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
                <TextField
                {...field}
                fullWidth
                label="Phone"
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: 'gray', // Default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'gray', // Hover (optional)
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange', // On focus
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'gray', // Label default
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'orange', // Label on focus
                  },
                }}
              />
            )}
          />
        </Grid>
      </Grid>

      {/* Shipping Info */}
      <SectionTitle title="Shipping Info" mt={5} />
      <Grid container spacing={2}>
        <Grid item size={{  sm: 12, xs: 12, md: 12 }}>
        <Typography>Address</Typography>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Address"
                error={!!errors.address}
                helperText={errors.address?.message}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'gray', // Hover (optional)
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'orange', // On focus
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'gray', // Label default
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'orange', // Label on focus
                    },
                  }}
              />
            )}
          />
        </Grid>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
        <Typography>Zip</Typography>
          <Controller
            name="zip"
            control={control}
            rules={{ required: "ZIP Code is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="ZIP Code"
                error={!!errors.zip}
                helperText={errors.zip?.message}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'gray', // Hover (optional)
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'orange', // On focus
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'gray', // Label default
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'orange', // Label on focus
                    },
                  }}
              />
            )}
          />
        </Grid>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
        <Typography>City</Typography>
          <Controller
            name="city"
            control={control}
            rules={{ required: "City is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="City"
                error={!!errors.city}
                helperText={errors.city?.message}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'gray', // Hover (optional)
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'orange', // On focus
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'gray', // Label default
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'orange', // Label on focus
                    },
                  }}
              />
            )}
          />
        </Grid>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
        <Typography>Country</Typography>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Country"
                error={!!errors.country}
                helperText={errors.country?.message}
                sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'gray', // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'gray', // Hover (optional)
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'orange', // On focus
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'gray', // Label default
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'orange', // Label on focus
                    },
                  }}
              />
            )}
          />
        </Grid>
      </Grid>

      {/* Payment Details */}
      <SectionTitle title="Payment Details" mt={5} />
      <Grid container spacing={2}>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
          <Typography variant='h7'>Payment Method</Typography>
        </Grid>
        <Grid item size={{  sm: 12, xs: 6, md: 6 }}>
          <Controller
            name="paymentMethod"
            control={control}
            defaultValue="e-Money"
            render={({ field }) => (
              <RadioGroup {...field} row>
                <Grid size={{  sm: 12, xs: 12, md: 12 }}>
                <FormControlLabel
                  value="e-Money"
                  control={<Radio sx={{ '&.Mui-checked': { color: '#D87D4A' } }} />}
                  label="e-Money"
                  sx={{ border: '1px solid #D87D4A', borderRadius: 2, px: 2, mr: 2 }}
                />
                </Grid>
                <Grid size={{  sm: 12, xs: 12, md: 12 }}>
                <FormControlLabel
                  value="Cash on Delivery"
                  control={<Radio />}
                  label="Cash on Delivery"
                  sx={{ border: '1px solid #ccc', borderRadius: 2, px: 2 }}
                />
                 </Grid>
              </RadioGroup>
            )}
          />
        </Grid>

      
      </Grid>

<br />
<br />
      <Grid container spacing={2}>

        <Grid size={{  sm: 3, xs: 3, md: 3 }}>
        <Box
  sx={{
    position: 'absolute',
    left: '6.58%',
    right: '86.85%',
    top: '90.23%',
    bottom: '5.51%',
    width: 48,
    height: 48,
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z' fill='#D87D4A'/>
      </svg>
    `)}`,

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }}
/>
        </Grid>
<Grid size={{  sm: 9, xs: 9, md: 9 }}>
    <Typography>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</Typography>
</Grid>
      </Grid>

      
    </Card>
</Grid>




<Grid size={{  sm: 12, xs: 12, md: 4 }}>


<Card  sx={{ p: { xs: 2, md: 4 }, mt: 4, borderRadius:"10px" }}>






      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          SUMMARY
        </Typography>

        <Box>
          {items.map((item, index) => (
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
                  sx={{ width: 60, height: 60, bgcolor: '#f4f4f4' }}
                />
              </Grid>
              <Grid item xs>
                <Typography fontWeight="bold">{item.name}</Typography>
                <Typography color="text.primary">${item.price.toLocaleString()}</Typography>
              </Grid>
              <Grid item>
                <Typography color="text.primary">x{item.quantity}</Typography>
              </Grid>
            </Grid>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <SummaryRow label="TOTAL"  value={`$ ${subtotal.toLocaleString()}`} bold />
          <SummaryRow label="SHIPPING" value={`$ ${SHIPPING}`} />
          <SummaryRow label="VAT (INCLUDED)" value={`$ ${vat.toLocaleString()}`} />
          <SummaryRow
            label="GRAND TOTAL"
            value={`$ ${grandTotal.toLocaleString()}`}
            bold
            highlight
          />
        </Box>
<br />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit(onSubmit)}
        >
           Continue & Pay
        </Button>
        <ConfirmationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        items={items}
        grandTotal={grandTotal}
      />
      </CardContent>
    

        
      
      </Card>
      </Grid>


        </Grid>
      <Footer2/>
    </div>
  )
}
const SectionTitle = ({ title, mt = 3 }) => (
    <Typography
      variant="subtitle2"
      sx={{ mt, mb: 2, color: '#D87D4A', textTransform: 'uppercase', fontWeight: 'bold' }}
    >
      {title}
    </Typography>
  );
  const SummaryRow = ({ label, value, bold, highlight }) => (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ mt: 1 }}
    >
      <Typography
        sx={{
          fontWeight: bold ? 'bold' : 'normal',
          color: highlight ? '#888' : 'text.primary',
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontWeight: bold ? 'bold' : 'normal',
          color: highlight ? '#D87D4A' : 'text.primary',
        }}
      >
        {value}
      </Typography>
    </Box>
  );
export default Checkout
