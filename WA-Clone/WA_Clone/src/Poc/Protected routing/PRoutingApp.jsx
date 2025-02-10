import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRout from '../ProtectedRout'
import Home from "../Home"
import Login from '../Login'
import Chat from '../Chat'


function PRouting() {
    const [IsLogin, setLogin] = useState(false);
    return (
    <>
    <h1>routing APP</h1>
    <Routes>
        <Route path='/' element={<ProtectedRout IsLogin = {IsLogin}>
            <Home setLogin = {setLogin}></Home>
        </ProtectedRout>}></Route>

        <Route path='/chat/:uniqueId' element={<ProtectedRout IsLogin ={IsLogin}>
            <Chat></Chat>
        </ProtectedRout>}>
        
        </Route>

        <Route path="/login" element={<Login setLogin={setLogin}></Login>}></Route>
    </Routes>
    </>
  )

}

export default PRouting