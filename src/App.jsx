import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'


function App() {

  return (
  <div id="main">
    <div id ="top">
         <input type="text" placeholder='Search resturants'></input>
         <div id="rating">
          <label>Minimum Rating:</label>
          <input type="number" min="0" max="5"></input>
         </div>
    </div>

    <Card/>
    </div>
   
  )
}

export default App
