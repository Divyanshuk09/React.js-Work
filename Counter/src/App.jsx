import { useState } from 'react'
import './App.css'
/*
function App() {
  let counter = 5;
  const addvalue = () => {            //Value change hui pr ui pr nhi aagyi thats why we use hooks
  console.log(counter)              /*Hooks se React development ka process aur bhi efficient aur manageable ho gaya hai.       
  counter = counter + 1               Yeh naye developers ke liye learning curve ko bhi asaan karte hain, kyunki unhe       
  }                                   sirf functional components ke concepts ko samajhna hota hai */                            
    


function App() {
  let [counter, setCounter] = useState(5)

  const addvalue = () => {
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }
  }
  const subtractvalue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Counter Using Hooks</h1>
      <h2>Counter Value : {counter}</h2>
      <div className='buttons'>
        <button className='addbutton' onClick={addvalue} disabled={counter===20}>Add Value</button>
        <button className='subbutton' onClick={subtractvalue} disabled={counter===0}>Subtract Value</button>
      </div>
    </>
  )
}

export default App
