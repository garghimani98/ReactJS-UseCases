import { useEffect, useRef } from "react";


const IsEqual=(currentdeps,newdeps)=>{
        if(currentdeps==null)
               return false;
        if(currentdeps.length!==newdeps.length)
              return false;
        for(let i=0;i<newdeps.length;i++){
            if(newdeps[i]!==currentdeps[i])
            return false;
        }
        return true;

}

const useMemoPolyfill=(cb,deps)=>{
      const MemozedRef=useRef(null);

      if(!MemozedRef.current || !IsEqual(MemozedRef.current.deps,deps)){
        MemozedRef.current={
            //since useMemo returns the value returned by its callback;
            value:cb(),
            deps
        };
      }

      //cleanupLogic
      useEffect(()=>{
                  return ()=>{
                    MemozedRef.current=null;
                  }
      },[])

      return MemozedRef.current.value;
};


export default useMemoPolyfill;