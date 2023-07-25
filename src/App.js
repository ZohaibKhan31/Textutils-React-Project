import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }


const toggleMode=()=>{
  if(mode=="light"){
    setmode("dark")
    document.body.style.backgroundColor="black";
    showalert("Dark mode is enabled","success");
    document.title="Textutils - Dark Mode"
  }
  else{
    setmode("light")
    document.body.style.backgroundColor="white";
    showalert("Light mode is enabled","success");
    document.title="Textutils - Light Mode"
  }
}
  return (
    <>
       <BrowserRouter>
        <Navbar title="Textutils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={
                <TextForm showalert={showalert} heading="Enter the text to analyze"  mode={mode}/>}>
            </Route>
        </Routes>
        </div>
        </BrowserRouter>
      </>
  );
}

export default App;
