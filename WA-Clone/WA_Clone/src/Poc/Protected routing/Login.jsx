import React from 'react'
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

function Login(props) {
  const setLogin = props.setLogin;
  const navigate = useNavigate();

  const HandelLogin = async ()=>{
    const result = await signInWithPopup(auth, new GoogleAuthProvider);
    console.log(result);
    setLogin(true);
    alert("login");
    navigate("/");
  }
  
  return (
    <>
    <div>Login</div>
    <button onClick={HandelLogin}>Login</button>
    </>
  )
}

export default Login