import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import About from "./Components/About.jsx";
import Navbar from "./Components/Navbar.jsx";
import Textarea from "./Components/Textarea.jsx";
import React, { useState } from 'react';

function App() {

  // function to toggle light-dark mode:
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  };

  const [color, setColor] = useState('white');
  const toggleColor = (color) => {
    setColor(color);
  }
  return (
    <>
      {/* This is a react component. Tag name is same as the file_name. */}
      {/* Tag attributes are passed to the component function as an object as a parameter. */}
      {/* <Navbar name={346}/> */}{/* Invalid as number is passed instead of string.(PropType is defined as string) */}
      {/* Router is used to create single page web applications. */}
      {/* Elements outside of Routes are common in all pages. */}
      {/* Route is the child element of Routes. Normal elements are not available as child of Routes. We have to pass components through element attribute. */}
      <Router>
        <Navbar name='React' base='JavaScript' mode={mode} toggleColor={toggleColor} />
        <h1 className="container my-2">This is my first react app</h1>
        <Routes>
          <Route path="/First-React-App/textarea" element={<Textarea heading='Enter your text' rows={8} default='Enter your text here' mode={mode} />} />
          <Route path="/First-React-App/about" element={<About toggleMode={toggleMode} mode={mode} color={color} />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
