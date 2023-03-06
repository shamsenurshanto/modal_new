import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from '../../Pages/Blogs';
import Home from '../../Pages/Home';
import Layout from '../../Pages/Layout';
import Login from '../Login/Login';
import Dashboard from '../../Pages/Dashboard'
import { Globalinfo } from '../../App';


const Navbar = () => {
  // const {appColor} = useContext(Globalinfo)
  // console.log(appColor);


  useEffect(()=>{
   console.log('Home')
  },[]);
  return (
    <div className='mt-5'>
       <BrowserRouter>
    <Routes>

    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} /> 
         <Route path="dashboard" element={<Dashboard/>} />
         <Route path="Login" element={<Login />} />

     
      </Route>

     
    </Routes>
  </BrowserRouter>
    </div>
  );
};

export default Navbar;