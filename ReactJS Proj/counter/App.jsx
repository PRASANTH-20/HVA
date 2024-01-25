import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
   setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () => {
    
    setCounter(counter - 1)
  }
  
  return (
    <div>
      
      <h1>Counter value : {counter} </h1>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer: {counter}</p>
    <div/>
  )
}

export default App
