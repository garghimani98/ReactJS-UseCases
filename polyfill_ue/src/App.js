import './App.css';
import {  useState } from 'react';

import useCustomEffect from "./hooks/usecustomeffects.js";

function App() {
   const [count,setCount]=useState(0);
   const [count1,setCount1]=useState(100);
    console.log(count1);
    console.log(count);

  useCustomEffect(()=>{
      console.log("useeffect called");
      return ()=>{
        console.log("rendering again")
      };
  },[count])

  return (
    <div className="App">
       <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={()=>setCount1(count1-1)}>Decrement</button>

    </div>
  );
}

export default App;
