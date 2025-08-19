import { useState } from 'react'
import './App.css'

import AppContent from './AppContent.jsx';

import Image from './assets/images.png';

import Menu from './components/menu.jsx';

function App() {

  return (
    <div className='appContainer'>
     <Menu/>
      <div className='bgOverlay'></div>
     <img className="bgImage" src={Image} />
     <AppContent/>
    </div>
  )
}

export default App
