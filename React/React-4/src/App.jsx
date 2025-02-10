import { useState } from 'react'

import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="input-container">
            <input type="text" name="" id="" placeholder="Enter Location" />
            <button>Search</button>
        </div>        
    </header>

    <main>
        <div className="weather-container">
            <div className="temprature">16</div>
            <div className="location-data">
                <div className="location">delhi</div>
                <span className="time">12.43</span>
                <span className="day">Monday</span>
                <span className="date">2025-01-18</span>
            </div>

            <div className="weather-status">
                <img src="./pngtree-cartoon-watercolor-hand-drawn-cute-little-sun-image_1093955.jpg"
                height="60px" alt="" />
                <div className="condition">Sunny</div>
            </div>
        </div>
    </main>

    </>
  )
}

export default App
