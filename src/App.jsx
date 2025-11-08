import { useState } from 'react'
import './App.css'

import React from 'react';

import AppContent from './AppContent.jsx';

import Image from './assets/images.png';

import Icon1 from './assets/img3.png';
import Icon2 from './assets/2.png';
import Icon3 from './assets/250822_10h13m08s_screenshot.png';

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

  const codeEditorData = {
  card1: {
    title: "About",
    description: "A modern and convenient code editor that combines minimalism, speed, and smart features."
  },
  card2: {
    title: "Technology",
    description: "Built with C# and .NET, using AvalonEdit for the text editor component and Roslyn for code analysis."
  },
  card3: {
    title: "Features",
    description: "Minimalism and aesthetics: dark theme to reduce eye strain, acrylic transparency in panels."
  }
};

const tetrisData = {
  card1: {
    title: "About",
    description: "A modern take on the timeless puzzle classic, focusing on a clean interface and responsive controls."
  },
  card2: {
    title: "Technology",
    description: "Built entirely with C# and the .NET Framework. The graphical user interface (GUI) is implemented using WPF."
  },
  card3: {
    title: "Features",
    description: "Features a real-time scoring system, level progression that increases game speed, and a high-score tracker."
  }
};

const phoneBookData = {
  card1: {
    title: "About",
    description: "A feature-rich web application for streamlined contact management with a highly intuitive user interface."
  },
  card2: {
    title: "Technology",
    description: "A modern single-page application (SPA) built with JavaScript and the React library, styled with Material-UI."
  },
  card3: {
    title: "Features",
    description: "Full CRUD functionality, advanced filtering by categories, and a powerful real-time search bar for instant lookups."
  }
};

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

            <Route path="/New-Site-React/Code-Editor" element={<PresentationPage title={"Code Editor"} subtitle="WPF .NET C# AvalonEdit Roslyn" image={Icon1} data={codeEditorData} paddingTop={"30px"} color={"rgba(255, 0, 0, 0.555)"} colorShadow={"rgba(255, 0, 0, 0.2)"} link={"https://github.com/atocheniy/Code-Editor"}/>} />
            <Route path="/New-Site-React/Tetris" element={<PresentationPage title={"Tetris"} subtitle="WPF .NET C#" image={Icon2} data={tetrisData} paddingTop={"50px"} color={"rgba(0, 195, 255, 0.56)"} colorShadow={"rgba(0, 153, 255, 0.2)"} link={"https://github.com/atocheniy/Tetris-2024-Release"}/>} />
            <Route path="/New-Site-React/Phone-Book" element={<PresentationPage title={"Phone Book"} subtitle="JavaScript React Material-UI" image={Icon3} data={phoneBookData} paddingTop={"60px"} color={"rgba(111, 0, 255, 0.56)"} colorShadow={"rgba(162, 0, 255, 0.2)"} link={"https://github.com/atocheniy/PhoneBook"}/>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
