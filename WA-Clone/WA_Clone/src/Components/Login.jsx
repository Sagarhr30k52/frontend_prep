import React from 'react'
import './Login-style.css'
function Login() {
  return (
    <>
    <div className='Outer-Container'>
    <div className='Green-Container'>
      <div className='Logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="" className='Whatsapp-Icon'/>
        <span className='WHATSAPP'>WHATSAPP</span>
      </div>

    </div>
    <div className='White-Container'>
        
    </div>
    <div className='Center-Container'>
      <div className='Sign-in'>
        <div>
          <img src="https://i.pinimg.com/736x/f4/f2/47/f4f2472803b523e73e23942f7598c174.jpg" alt="" className='Finger-Tip-img'/>
        </div>
        <div className='sign-in-text'>Sign-in</div>

        <div className='Sign-in-button-box'>
          <button className='Sign-In-button'>Sign-In</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login