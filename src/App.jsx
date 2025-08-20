import { useState } from 'react'
import './App.css'

import React from 'react';

import AppContent from './AppContent.jsx';

import Image from './assets/images.png';

import Menu from './components/menu.jsx';
import Sidebar from './components/sidebar.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='appContainer'>
      <Menu open={open} setOpen={setOpen} toggleDrawer={toggleDrawer}/>
      <Sidebar open={open} setOpen={setOpen} toggleDrawer={toggleDrawer}/>
      <div className='bgOverlay'></div>
      <img className="bgImage" src={Image} />
      <AppContent/>
      </div>
    </ThemeProvider>
  )
}

export default App
