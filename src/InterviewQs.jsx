import { useState } from 'react';

function Interview() {
    
  // The Question: 
  // how many time the counter get update of click to ?
  // What will be the value of the counter ? 

  const[counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); // All Work as one
    // UseState send any updates in UI or variable in batches
    // By use of fibre diffing algorithm, we can send any update or changes in batch,
    // Fibre gives more control over the batches now to send them at once
    // If the tasks are similar then it will send it once.

    // To do this setUpdate gives the callback function like this
    // each states accepts the callback, It is gives the last updated state which we can fetch
    // Prev Counter can be named any thing
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1); // Three work individually
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <div style={{marginBottom: "10px"}}> Value of count is: {counter}</div>
      <button style={{marginRight: "12px"}} onClick={addValue}> Adding</button>
      <button onClick={removeValue}> Removing</button>           
    </>
  )
}

export default Interview;