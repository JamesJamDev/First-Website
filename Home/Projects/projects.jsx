import React from 'react';
import './projects.css'
import { useState, useEffect } from 'react'
import jellyJamLogo from "../src/assets/jellyjam.png";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([]);
  

  const fetchAPI = async () => {
    const response = await axios('http://localhost:8080/api');
    setArray(response.data.projects);
    console.log(response.data.projects);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
     <div className="App">
      <h1>JellyJam</h1>
      <a href="https://www.youtube.com/c/@JellyJamDev" target="_blank">
        <img src={jellyJamLogo} className="jellyjam" alt="JellyJam Logo" />
        </a>
        </div>
        <div>
          <button onClick={() => setCount(count + 1)}>Button</button>
        </div>
        <textarea value={array} readOnly></textarea> 
        
    </>
  )

}
export default ProjectDisplay;