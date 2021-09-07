import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './Auth/Auth';   //need to change folder structure
import Sitebar from './Site/Sitebar';
import Home from './Home/Home'

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
    <div>
     
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()} 
  
    </div>
  );

}
export default App;

