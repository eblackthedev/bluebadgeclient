import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './Auth/Auth';   //need to change folder structure
import Sitebar from './Site/Sitebar';
import Home from './Home/Home';
import {BrowserRouter as Router } from "react-router-dom";
import Footer from './Site/Footer';
//import GamesList from './Game/GamesList';

function App() {
  const [sessionToken, setSessionToken] = useState(''); 

  useEffect(() => { 
    if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
    }
  },[])

const updateToken = (newToken) => { 
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
    console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}
const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
  }
  

  return (
    <>
     
      
     
      <Router>
     { sessionToken === localStorage.getItem('token')&& <Sitebar clickLogout={clearToken}/>}
      {protectedViews()} 
      </Router>
    <Footer/>
    </>
  );

}
export default App;

