import { useState } from 'react'
import './App.css'

import React from 'react';

import AppContent from './AppContent.jsx';

import Image from './assets/images.png';

import Icon1 from './assets/img3.png';

import Menu from './components/menu.jsx';
import Sidebar from './components/sidebar.jsx';

import {BrowserRouter as Router, Routes, Route, NavLink, Navigate, Outlet, useParams, useNavigate} from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Gallery from './Gallery.jsx';
import PresentationPage from './PresentationPage.jsx';

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
        <Router>
          <Menu open={open} setOpen={setOpen} toggleDrawer={toggleDrawer}/>
          <Sidebar open={open} setOpen={setOpen} toggleDrawer={toggleDrawer}/>
          <div className='bgOverlay'></div>
          <img className="bgImage" src={Image} />
          <Routes>
            <Route path="/New-Site-React/" element={<AppContent/>} />
            <Route path="/New-Site-React/gallery" element={<Gallery />} />

            <Route path="/New-Site-React/Code-Editor" element={<PresentationPage title={"Code Editor"} subtitle="WPF .NET C# AvalonEdit Roslyn" image={Icon1} data={""}/>} />
            <Route path="/New-Site-React/Tetris" element={<PresentationPage title={"Tetris"} image={""} data={""}/>} />
            <Route path="/New-Site-React/Phone-Book" element={<PresentationPage title={"Phone Book"} image={""} data={""}/>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
