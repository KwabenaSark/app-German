// src/theme.js
import { createTheme } from '@mui/material/styles';

// Custom Colors
const COLORS = {
  peach: '#D87D4A',
  peachLight: '#FBAF85',
  black: '#101010',
  white: '#FFFFFF',
  whiteSmoke: '#FAFAFA',
  gray: '#F1F1F1',
    black50: 'rgba(16, 16, 16, 0.5)'
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.peach,
    },
    secondary: {
      main: COLORS.peachLight,
    },
    background: {
      default: COLORS.whiteSmoke,
    },
    text: {
      primary: COLORS.black,
      secondary: COLORS.peachLight,
      third: COLORS.black50,
    },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '56px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 700,
      fontSize: '40px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 700,
      fontSize: '32px',
      letterSpacing: '1.15px',
      textTransform: 'uppercase',
    },
    h4: {
      fontWeight: 700,
      fontSize: '28px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    h5: {
      fontWeight: 700,
      fontSize: '24px',
      letterSpacing: '1.7px',
      textTransform: 'uppercase',
    },
    h6: {
      fontWeight: 700,
      fontSize: '18px',
      letterSpacing: '1.3px',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '14px',
      color: COLORS.peachLight,
    },
    body1: {
      fontSize: '15px',
      fontWeight: 500,
      lineHeight: '25px',
    },
    overline: {
      fontWeight: 400,
      fontSize: '12px',
      letterSpacing: '1px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 700,
          letterSpacing: '1px',
          padding: '1rem 2rem',
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: COLORS.peach,
            color: COLORS.white,
            '&:hover': {
              backgroundColor: COLORS.peachLight,
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: COLORS.black,
            color: COLORS.black,
            '&:hover': {
              backgroundColor: COLORS.black,
              color: COLORS.white,
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: COLORS.black,
            textDecoration: 'underline',
            '&:hover': {
              color: COLORS.peach,
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '0px',
            border: '1px solid #CFCFCF',
          },
          '& .Mui-error': {
            borderColor: 'red',
          },
        },
      },
    },
  },
});

export default theme;