import React from 'react'
import { LogIn } from 'lucide-react';

function Login() {
  return (
    <>
      <div className="m-0">
        {/* Green-Container */}
        <div className="bg-[#25D366] h-[150px] flex">
          {/* Logo */}
          <div className="absolute top-[50px] left-[50px]">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
              alt="Whatsapp Icon" 
              className="h-[33px]" 
            />
            <span className="text-white text-xl font-serif font-semibold relative top-[-30px] right-[-30px]">WHATSAPP</span>
          </div>
        </div>

        {/* White-Container */}
        <div className="bg-white h-[calc(100vh-150px)]"></div>

        {/* Center-Container */}
        <div className="bg-white h-[450px] w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center rounded-lg">
          <div className="flex text-center flex-col items-center justify-center gap-[2rem]">
            {/* Finger-Tip-img */}
            <div>
              <img 
                src="https://i.pinimg.com/736x/f4/f2/47/f4f2472803b523e73e23942f7598c174.jpg" 
                alt="Finger Tip" 
                className="h-[120px]" 
              />
            </div>

            {/* Sign-in Text */}
            <div className="text-2xl">Sign-in</div>

            {/* Sign-in Button Box */}
            <div className='flex gap-[2px]'>
              <button className="bg-[#25D366] text-white h-[70px] w-[280px] rounded-lg text-[25px] font-sans shadow-xl">
                <div>
                Sign-In with Google
                <LogIn className='inline box-content ml-[10px] mb-[5px]'></LogIn>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login