import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#1a3c6e' },
    secondary: { main: '#e8a020' },
    background: { default: '#f9f9f7' },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif' },
    h2: { fontFamily: '"Playfair Display", serif' },
    h3: { fontFamily: '"Playfair Display", serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 4, textTransform: 'none', fontWeight: 600 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 10, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' },
      },
    },
  },
})

export default theme