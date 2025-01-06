import { useState, useEffect } from 'react'
import jellyJamLogo from "./assets/jellyjam.png";
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([]);
  

  const fetchAPI = async () => {
    const response = await axios('http://localhost:8080/api');
    setArray(response.data.fruits);
    console.log(response.data.fruits);
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
        <textarea value={array} readOnly></textarea>
    </>
  )
}

export default App
