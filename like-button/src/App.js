
import './App.css';
import {useState} from 'react';
import { Heart,Loader } from 'lucide-react';

import useMemoPolyfill from "./useMemo.polyfill";


function App() {

  const [counter1,setCounter1]=useState(0);
  const [liked,setLiked]=useState(false);
  const [isfetching,setIsfetching]=useState(false);
  const [error,setError]=useState(null);

  const handlelikeunlike=async()=>{
           setError(null);
           setIsfetching(true);

    try{
           
           const response=await fetch("https://www.greatfrontend.com/api/questions/like-button",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
              action:liked?"unlike":"like"
            })
            
           });

           console.log(response);
           if(response.status>=200 && response.status<300){
                   setLiked(!liked);
           }
           else{
            const res=await response.json();
            setError(res.message);
            return;
           }


    }

    finally{
      setIsfetching(false);
    }

  }


  const squaredcounter=()=>{
    return  counter1*counter1;
  }

  const memoizedfunctionality=useMemoPolyfill(squaredcounter,[counter1]);

  return (
    <div className="App">

        <div className='incrementcounter'>
           <span>counter is:{counter1}</span>

           <span>Squared counter is  is:{memoizedfunctionality}</span>
           <button onClick={()=>setCounter1(counter1+1)}>Increment</button>
        </div>
        
      <div>
        <button className={`likebtn ${liked?"liked":""}`}  disabled={isfetching} onClick={handlelikeunlike}>{isfetching?<Loader/>:<Heart/>}{liked?"Liked":"Like"}</button>
      </div>
      {error && <div className='errmessage'>{error}</div>}
       
    </div>
  );
}

export default App;
