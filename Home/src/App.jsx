import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import Test from './test.jsx'
import Projects from './test.jsx';

function App() {
  const [state, SetState]  = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Jelly Jam</h1>
        <Projects />
    </div>
  );
}

export default App
