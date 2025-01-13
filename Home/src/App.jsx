import { useState, useEffect } from 'react'
//import { JellyJamIcon } from "./JellyJamIcon.jsx"
import steamicon from "./assets/steamlogo.png"
import './App.css'
import axios from "axios";
import Test from './test.jsx'

function App() {
  
  return (
    <>
        <h1>Jelly Jam Dev</h1>
        <button onClick={console.log("Hello!")}>clickme</button>
        <Test />
    </>
  );
}

export default App
