import { createContext, useState } from 'react'
import PropDrilling from './context/1_PropDrilling'
import PropDrillingSol from './context/PropDrillingSol'
import Home from './Theme changer/Home'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Theme changer/PageNotFound'
import './App.css'
import React from 'react'

export const ThemeWrapper = React.createContext(); 

function App() {
  const [count, setCount] = useState(0)
  const [isDark, updateTheme] =useState(false);
  const handelToggelTheme = () =>{
    updateTheme(!isDark);
  }


  return (
    <>
      {/* <PropDrilling></PropDrilling> */}
      {/* <PropDrillingSol></PropDrillingSol> */}
      <button onClick={handelToggelTheme}>Toggel theme</button>
      <ThemeWrapper.Provider value={isDark}>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      </ThemeWrapper.Provider>
    </>
  )
}

export default App
