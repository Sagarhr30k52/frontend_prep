import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRout(props){
    const IsLogin = props.IsLogin;

    const children = props.children;
    if(IsLogin){
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }
  }

export default ProtectedRout

