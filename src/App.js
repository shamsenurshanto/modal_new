import logo from './logo.svg';
import './App.css';
import MyModal from './Components/MyModal/MyModal';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './Components/Products';
import Login from './Components/Login/Login';

import Button from "@mui/material/Button";
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar/Navbar';
import Audi from './Components/Audi';

export  const Globalinfo = createContext();



function App() {
  const [Color2,setColor]=useState("red");
  const [id,setId]=useState(null);
  const [mail,setMail]=useState(null);
  console.log(Color2);
  const getId = (item)=>{
    console.log(item); 
    setId(item);
  }
  const getMail = (item)=>{
    console.log(item); 
    setMail(item);
  }
 
 
  return (
   <>
   {/* <Globalinfo.Provider value = {{appColor : Color2}}>   */}

   {/* <Navbar/> */}
     {/* <Login/> */}
     {/* <Audi></Audi> */}
   {/* </Globalinfo.Provider> */}

   <Globalinfo.Provider value ={{appColor : Color2 , GetId : getId , Id : id , Mail : mail , getMail : getMail}}>
   <Navbar/>
    </Globalinfo.Provider>
  

 
   </>
  );
}

export default App;
