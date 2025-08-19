import { useState } from 'react'
import './App.css'

import AppContent from './AppContent.jsx';

import Menu from './components/menu.jsx';

function App() {

  return (
    <div className='appContainer'>
     <Menu/>
      <div className='bgOverlay'></div>
     <img className="bgImage" src="./public/images.png" />
     <AppContent/>
    </div>
  )
}

export default App
