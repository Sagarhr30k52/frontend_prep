import { useState } from 'react'
// import InputBox from './components/input'
import Shoping from './components/Shoping'

function App() {
  const [count, setCount] = useState(0)

  return <div className='outer_div'>
    <h1>React</h1>
    {/* <InputBox></InputBox> */}
    <Shoping></Shoping>
  </div>      
}

export default App
