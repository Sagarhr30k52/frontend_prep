import { useState } from 'react'
import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
// import Profile from './Components/Profile'
import PageNotFound from './Components/PageNotFound'
import Chat from './Components/Chat'

import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          
          <Route path='/login' element={<Login></Login>}></Route>
          
          <Route path='/chat/:uniqueId' element = {<Chat></Chat>}></Route>
          
          <Route path='*' element = {<PageNotFound></PageNotFound>}></Route>

        </Routes>
    </>
  )
}

export default App