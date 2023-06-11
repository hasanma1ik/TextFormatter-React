// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom"

   
    function App(){
      const [mode,setMode] = useState('light'); // whether dark mode is enabled or not
      const [alert, setAlert] = useState(null);
      const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
          
        }, 7000);
      }

      const toggleMode = ()=>{
        if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
        // document.title = 'TextUtils - Dark Mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        // document.title = 'TextUtils - light mode';

      }
    }
      return (
        <>
     
 {/* <Navbar title="TextutilsX" aboutText="About TextUtils" /> */}
 
 
 {/* <Navbar/> */}
 <BrowserRouter>
 <Navbar title="TextFormatter" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
 <div className="container my-3">
<Routes>
          <Route path="/about" element={<About mode={mode} />} />
          
          < Route path="/"
            element= {<TextForm showAlert={showAlert} heading="Text Formatter - Word Counter, Character Counter, Text CleanUp" mode={mode}/>} /> 
          </Routes>
          </div>
          </BrowserRouter>       
                    
        </>
      );
    }   


export default App;
