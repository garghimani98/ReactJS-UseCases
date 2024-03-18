import React, { useEffect } from 'react'
import { useState,useRef } from 'react';

export const OtpInput = ({length=4,onOtpSubmit=()=>{}}) => {

    const [otp,setOtp]=useState(new Array(length).fill(""));

    const inputRefs=useRef([]);


    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
        console.log(inputRefs.current);
    },[])


const handleChange =(index,event)=>{
    const value=event.target.value;
    console.log(value);

    if(isNaN(value)) return;

    //allow only one input
    const newOtp=[...otp];
    newOtp[index]=value.substring(value.length-1);
    setOtp(newOtp);

    //submit trigger
    const combinedotp=newOtp.join("");
    
    if(combinedotp.length===length) {
        onOtpSubmit(combinedotp);
    }

    //move to next input if current input is filled
   
    if(value  && index<(length-1) && inputRefs.current[index+1]!==null) 
    {
        
        inputRefs.current[index+1].focus();
        
    }
    
    //move to the next input if current field is filled
    // if(val && index<length-1 && inputRefs.current[index+1])
    // inputRefs.current[otp.indexOf("")].focus();

}
const handleClick=(index)=>{
      //inputRefs.current[index].setSelectionRange(1,1);
      //optional
      if(index>0 && !otp[index-1]){
        //IT IS GOING TO FOCUS ON THE FIRST EMPTY BOX IT FINDS
        inputRefs.current[otp.indexOf("")].focus();
      }
}

const handleKeyDown=(index,event)=>{
    if(event.key==="Backspace" && 
    !otp[index] && 
    index>0 &&
    inputRefs.current[index-1]){
        console.log(inputRefs.current[index-1]);
        inputRefs.current[index-1].focus();
    }
}

  return (
    <div>OtpInput
        {
            otp.map((value,index)=>{
                return (
                    <input ref={(input)=>(inputRefs.current[index]=input)
                    
                    }   key={index} type="text" value={value} onChange={(event)=>{handleChange(index,event)}} onClick={()=>handleClick(index)} onKeyDown={(event)=>{handleKeyDown(index,event)}} className="otpInput"/>
                )
                    
                
            })
        }

    </div>
  )
}
