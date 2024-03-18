import React, { useState } from 'react';
import {OtpInput} from './OtpInput';

const Phoneotplogin = () => {

    const [phonenumber,setPhoneNumber]=useState("");
    const [showOtp,setshowOtp]=useState(false);

    const handlephonenumber=(event)=>{

        setPhoneNumber(event.target.value);
        

    }

    const handleformsubmit=(event)=>{
               event.preventDefault();
               const regex=/[^0-9]/g;
               if(phonenumber.length<10 || regex.test(phonenumber)){
                alert('invalid Phone Number')
                return;
               }
               //call  Backend API
               //show otp field
               setshowOtp(true);

    }


    const onOtpSubmit=(otp)=>{
             console.log("successful login with" +otp);
    }


  return (
    <div>
        <h2>Phoneotplogin</h2>
        {
            showOtp?(<div>
                
                <h2>Enter otp sent to {phonenumber}</h2>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
                
                </div>):(
                <form onSubmit={handleformsubmit}>
                <input type='text' value={phonenumber} placeholder='Enter phone number' onChange={handlephonenumber} />
                <button type='submit'>Submit</button>
            
                </form>
            )
            
        }


    </div>
  )
}

export default Phoneotplogin;