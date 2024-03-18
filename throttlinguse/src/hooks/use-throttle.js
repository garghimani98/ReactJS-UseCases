import React, { useEffect, useRef, useState } from 'react';


const useThrottle=(value,delay)=>{

    const [throttledvalue,setThrottledvalue]=useState(value);

    const lastExecuted=useRef(Date.now());
    useEffect(()=>{

        const timer=setTimeout(()=>{

            const now=Date.now();
            const timeElapsed=now-lastExecuted.current;
            if(timeElapsed>delay){
                setThrottledvalue(value);
                lastExecuted.current=now;
            }

        },delay-(Date.now()-lastExecuted.current));

        return ()=>{
            clearTimeout(timer);
        };

    },[value,delay]);
       return throttledvalue;

}

export default useThrottle;


//create a state to hold the throttled value using useState
//track the last execution time

//useRef to keep track of last time the function was executed

//useEffect for throttling
   //set up a time to handle the logic
   //