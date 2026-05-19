import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '@fontsource/dm-sans'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)