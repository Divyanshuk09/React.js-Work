
import { useState, useEffect, useCallback, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  /* UseRef:
useRef hook ka use mutable object ko store karne ke liye kiya jata hai. Yeh object re-renders ke dauran persist rehta hai aur yeh DOM elements ya kisi bhi variable ko reference karne ke liye istemal hota hai. Iska primary use case DOM access aur state ko maintain karna hota hai.
*/

/* UseCallback:
useCallback hook ka use function ko memoize karne ke liye hota hai. Jab aapko kisi child component ko prop ke through function pass karna hota hai, toh yeh hook ensure karta hai ki function sirf tab hi recreate ho jab dependencies change ho. Isse unnecessary re-renders bachte hain.
*/
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '~!#$%^&*?/()<>{}[]'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed])

 const PassCopiedToclipboard =useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
 },[password])

 /* UseEffect:
useEffect hook ko component ke lifecycle events ko manage karne ke liye use kiya jata hai. Yeh function aapko side effects ko control karne ki flexibility deta hai, jaise data fetching, subscriptions, ya manual DOM manipulations.
*/

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className="bg-gray-600 rounded-xl max-w-lg mx-auto my-4 text-black">
      <h2 className="my-4 text-black text-2xl text-center">Password Generator</h2>

      <div className='px-8 '>
        <input className="px-4 py-2 rounded-l-xl w-[80%] outline-none"
          type="text"
          value={password}
          placeholder='GENERATE PASSWORD ...'
          readOnly 
          ref={passwordRef}/>

        <button className="bg-blue-500 text-black rounded-r-xl px-4 py-2 hover:bg-blue-700"
        onClick={PassCopiedToclipboard}
        >Copy</button>
      </div>

      <div className="flex flex-wrap gap-4 my-4 py-4 align-center justify-center">
        <div className="flex gap-1">
          <input type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="length">Length({length})</label>
        </div>
        <div className="flex gap-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="Number">Nuumber</label>
        </div>
        <div className="flex gap-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="SpecialChar">Special Char</label>
        </div>
      </div>
    </div>
  )
}

export default App