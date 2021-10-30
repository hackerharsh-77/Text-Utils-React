
//import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

 

function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode = () =>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor = '#020a39';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter text here to analyze below " mode={mode}/>
    {/* <About/> */}
    </div>
  </>
  );
  
}

export default App;
