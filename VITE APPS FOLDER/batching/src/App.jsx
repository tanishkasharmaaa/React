import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const counter1=()=>{
    setCount1(count1+1)
    console.log(count1)
  }

const counter2=()=>{
setCount2(count2+1);
setCount2(count2+1);
setCount2(count2+1);
console.log(count2)
}


const counter3=()=>{
  setCount3(prev=>prev+1);
setCount3(prev=>prev+1);
setCount3(prev=>prev+1);
console.log(count3)
}

  return (
    <div>
<div>
  <h2>
    Explain the asynchronous nature of (setCount)
  </h2>
  <h1>Count : {count1}</h1>
  <button onClick={counter1}>Increment</button>
</div>

<div>
  <h2>Explain why multiple setCount calls do not result in the count being 3.</h2>
  <h1>Count : {count2}</h1>
  <button onClick={counter2}>Increment</button>
</div>

<div>
  <h2>To get the expected output of 3</h2>
  <h1>Count : {count3}</h1>
  <button onClick={counter3}>Increment</button>
</div>
    </div>
  )
    
}

export default App
