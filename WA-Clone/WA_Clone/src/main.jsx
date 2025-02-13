import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

// import PRouting from './Poc/Protected routing/PRoutingApp'
// import User from './Poc/Use effect/user'


import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render( 
  // {/* <PRouting></PRouting> */}
  // <User></User>

  <BrowserRouter>
<App />
  </BrowserRouter> 
)
