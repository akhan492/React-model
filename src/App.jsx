import { useState } from 'react'
import Model from './comonent/Model'
import './App.css'
const button_wrapper  ={
  postition: 'relative',
  zIndex: '1',
}
const OtherContnent = {
  position: 'relative',
  zIndex: '1',
  backgroundColor: 'red',
  padding: '10px',
}

function App() {
  const [isOpen,setIsOpen] = useState(false);


  return (
    <div className="App">
      <h1>React Model</h1>
    <div style={button_wrapper}> 
      
    <button className='btn' onClick={()=> setIsOpen(true)}>Open Model</button>
    </div>
   <Model className="model" open={isOpen}  isClose={()=>setIsOpen(false)}>
     fancy model
   </Model>
      {/* <div style={OtherContnent}>
        <h1>Hello World</h1>
        </div> */}
    </div>
  )
}

export default App
