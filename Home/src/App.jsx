import { useState, useEffect } from 'react'
import jellyJamLogo from "./assets/jellyjam.png";
import steamicon from "./assets/steamlogo.png"
import './App.css'
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
      <div style={{textAlign: 'center'}}>
        <div className="App">
          <h1>JellyJam</h1>
          <a href="https://www.youtube.com/c/@JellyJamDev" target="_blank">
            <img src={jellyJamLogo} className="jellyjam" alt="JellyJam Logo" style={{ width: '100px', height: '100px' }} />
          </a>
        </div>
        <h1 style={{fontSize: '50px'}}>Projects</h1>
      </div>
      <div margin="auto" style={{textAlign: 'center', whiteSpace: 'pre-wrap'}}>
        <h1>Boxception</h1>
        <text style={{fontSize: '20px'}}>A 3D puzzle game where you use boxes to solve puzzles. &#10; While also
          taking control of items in the environment to give you a whole new set of abilities.</text>
          <div>
            <h2>Boxception Steam Page</h2>
          </div>
          <div>
            <a href="https://store.steampowered.com/app/1729280/Boxception/" target="_blank"></a>
            <img src={steamicon} alt="Steam Logo" style={{width: '50px', height: '50px'}} />
          </div>
          
      </div>
    </>
  )
}

export default App
