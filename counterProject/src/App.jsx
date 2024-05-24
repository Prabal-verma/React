import { useState } from 'react';
import './App.css'



function App() {

  let count = 5;
  let [counter, setCounter] = useState(count);

  const addValue = () => {
    counter++;
    console.log("value added", counter);
    setCounter(counter);
  }
   
  const subValue = () =>{
    counter--;
    console.log("value added", counter);
    setCounter(counter);
  }

  return (
    
    <>
      <h1>Poxy Pixels</h1>
      <h2>counter value : {counter}</h2>

  
      <button onClick = {addValue} >Increase Value</button>
      <button onClick = {subValue}>Decrease value</button>
    </>
  )
}

export default App
