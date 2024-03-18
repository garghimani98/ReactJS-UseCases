
import { useState ,useEffect} from 'react';

import useThrottle from './hooks/use-throttle.js';
import './App.css';

function App() {
   const [windowsize,setWindowsize]=useState({
    height:window.innerHeight,
    width:window.innerWidth,
   });


   const handleResize=()=>{
              setWindowsize({
                height:window.innerHeight,
                width:window.innerWidth,
              });
              //any expensive operation or API Call
   };

   const throttledhandleresize=useThrottle(handleResize,2000);

   useEffect(()=>{
    window.addEventListener("resize",handleResize());

    return ()=>{
      window.removeEventListener("resize",handleResize());
    };

   },[]);


  return (
    <div className="App">
              <span>{windowsize.height} * {windowsize.width}</span>
    </div>
  );
}

export default App;
