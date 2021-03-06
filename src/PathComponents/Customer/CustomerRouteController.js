/// Modules and component
import React, { Fragment, useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';
import { useCookies } from "react-cookie";
/// Component
import Homepage from './Homepage/Homepage';
import Login from './Login/LoginController'
import Register from './Register/Register';
import Profile from './Profile/ProfileController';
import FooterCustomer from './Homepage/Footer/FooterCustomer';
import Navbar from "./Homepage/Navbar/Navbar";
/// Css
import './App.css';
import { faL } from '@fortawesome/free-solid-svg-icons';
const App = () => {
  // const [getCookies, setCookies] = useCookies();
  const [getState,setState]=useState(false);
  const getUrl=window.location.href;
  const getParam=getUrl.split("/");
  const Result=getParam[3];
  useEffect(()=> {
    // if (getCookies.Customer) {
    //   console.log("check");
    //     axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getStatus", {
    //     TOKEN: getCookies.Customer
    //   }).then(res=>{if(res.data.STATUS){setState(res.data.STATUS)}})
    // }
    if(Result){
      axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getStatus",{
        TOKEN:Result,
      }).then(res=>{
        if(res.data.STAtUS){
          setState(res.data.STAtUS);
        }
      })
    }
  },[])
  const RouteAuth = ({ children }) => {
    console.log(getState);
    if (getState) {
       return children;
    }  
  return <Navigate to="/" />; 
  }
  // const RouteNonAuth = ({ children }) => {
  //   if (!getState) {
  //     return children;
  //   }
  //   return <Navigate to="/" />;
  // }
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Routes>
          {/* <Route path='/' element={<Homepage />} />
          <Route path='/Login/*' element={
            <RouteNonAuth>
              <Login />
            </RouteNonAuth>
          } />
          <Route path='/Register' element={
            <RouteNonAuth>
              <Register />
            </RouteNonAuth>
          } /> */}
          <Route path=':token/Profile/*' element={
            // <RouteAuth>
              <Profile value={Result}/>
            // </RouteAuth>
          } />
        </Routes>
      </div>
      <FooterCustomer />
    </>
  );
}
export default App;
