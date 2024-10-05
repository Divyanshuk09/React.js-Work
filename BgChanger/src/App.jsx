import { useState } from 'react'

//useState ek hook hai jo React ke functional components mein state manage karne ke liye use hota hai. Iska use karne se aap functional components mein state ko manage kar sakte hain bina class components banaye.

//useState React functional components ko state management ki ek simple aur effective tarika deta hai. Ye code ko zyada clean aur maintainable banata hai.

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen' style={{ backgroundColor: color }}>
      <div className="fixed bottom-32 left-[20%] m-auto bg-white px-3 py-[6px] flex flex-wrap gap-4 justify-center rounded-3xl">
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'red' }} onClick={() =>       
           setColor("red")} >Red</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'white' }} onClick={() => 
           setColor("white")}>White</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'pink' }} onClick={() => 
           setColor("pink")}>Pink</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'yellow' }} onClick={() => 
           setColor("yellow")}>Yellow</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'orange' }} onClick={() => 
           setColor("orange")}>Orange</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'green' }} onClick={() => 
           setColor("green")}>Green</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'olive' }} onClick={() => 
           setColor("olive")}>Olive</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'grey' }} onClick={() => 
           setColor("grey")}>Grey</button>
        <button className='px-6 py-1 rounded-2xl border border-black' style={{ backgroundColor: 'violet' }} onClick={() => 
           setColor("violet")}>Violet</button>
      </div>
    </div>
  )
}

export default App
