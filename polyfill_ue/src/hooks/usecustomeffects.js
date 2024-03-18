import { useRef } from "react";

const  useCustomEffect=(effect,deps)=>{
    const isfirstrender=useRef(true);
    const prevdeps=useRef([]);
    //first render
    if(isfirstrender.current)
    {
        isfirstrender.current=false;
        const cleanup=effect();
        return ()=>{
            if(cleanup && typeof cleanup === "function" )
            {
                cleanup();
            }
        };
            
        
    }


    //deps  changes and no deps array

    const depsChanged=deps?
    (JSON.stringify(deps)!==JSON.stringify(prevdeps.current))
    :true;
    if(depsChanged){
        const cleanup=effect();
        if(cleanup && typeof cleanup === "function" && deps )
        {
            cleanup();
        }
        
    }

    //cleanup

    prevdeps.current=deps||[];
}


export default  useCustomEffect;