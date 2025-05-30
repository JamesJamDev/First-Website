import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import Projects from './Projects.jsx';
import JellyJamIcon from './JellyJamIcon.jsx';

function App() {
  const [state, SetState]  = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <JellyJamIcon />
        <Projects />
    </div>
  );
}

export default App
