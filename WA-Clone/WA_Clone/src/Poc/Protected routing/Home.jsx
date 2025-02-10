import React from 'react'

import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Home(props) {
  const setLogin = props.setLogin;
  const navigate = useNavigate();
  
  const HandelLogout = async ()=>{
    await signOut(auth);
    setLogin(false);
    alert("logout");
    navigate("/login");
  }
  
  return (
    <div>Home
      <button onClick={HandelLogout}>Log out</button>
    </div>
  )
}

export default Home