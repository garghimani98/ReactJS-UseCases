import './App.css';
import { useEffect, useState } from 'react';
import { tenureData } from './utils/constants';
import {numberWithCommas} from '../src/utils/config.js';

import Textinput from './components/textinput.js';

import Sliderinput from './components/sliderinput.js';

function App() {
  const [cost,setCost]=useState(0);
  const [interest,setInterest]=useState(10);
  const [fee,setFee]=useState(1);
  const [downPayment,setDownPayment]=useState(0);
  const [tenure,setTenure]=useState(tenureData);
  const [emi,setEmi]=useState(0);



  const calculateEMI=(downPayment)=>{
    if(!cost)
        return ;
    const loanAmt=cost-downPayment;
    const rateOfInterest = interest;
    const numofYears = tenure/12;

    const EMI = (loanAmt*rateOfInterest*(1+rateOfInterest)**numofYears)/((1+rateOfInterest)**numofYears-1);
    return Number(EMI/12).toFixed(0);
  }

  const calculateDP=()=>{
    if(!cost)
    return;
    
    const downPaymentPercent = 100 - (emi/calculateEMI(0))*100;
    return Number((downPaymentPercent/100)*cost).toFixed(0);

  }

  useEffect(()=>{
    if(!(cost>0)){
      setDownPayment(0);
      setEmi(0);
      

    }
    else{
      const emi=calculateEMI(downPayment);
      setEmi(emi);
    }
    

  },[tenure,cost]);

  const updateEMI=(e)=>{
    if(!cost)
    return;
    const dp=Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    //calculatemi and update
    //calculate EMI gives monthly EMI
    const emi=calculateEMI(dp);
    setEmi(emi);


  };

  const updateDownPayment=(e)=>{
    if(!cost)
       return;
    const emi=Number(e.target.value);
    setEmi(emi.toFixed(0));

    //calculatdownpayment and update
    const downpay=calculateDP(emi);
    setDownPayment(downpay);
    
  };


  const totalDownPayment=()=>{
    return numberWithCommas((Number(downPayment) + (cost-downPayment)*(fee/100)).toFixed(0));
  }
  

  const totalEMI=()=>{
    return (numberWithCommas((emi*tenure).toFixed(0)));
  }
  
  return (
    <div className="App">

      <span style={{marginTop:10 , fontSize:20,marginBottom:10}}>EMI Calculator</span>

      <Textinput title={'Total Cost of Assets'} state={cost} setState={setCost}/>

      <Textinput title={'Rate of Interest(in %)'} state={interest} setState={setInterest}/>

      <Textinput title={'Processing Fees(in %)'} state={fee} setState={setFee}/>


       <Sliderinput title="Down Payment" state={downPayment} min={0}  max={cost} onChange={updateEMI} labelMin={"0%"} labelMax={"100%"} underLineTitle={`Total Down Payment - ${totalDownPayment()}`}/>
       
       <Sliderinput title="Loan Per Month" state={emi} min={calculateEMI(cost)}  max={calculateEMI(0)} onChange={updateDownPayment}  underLineTitle={`Total Loan Amount - ${totalEMI()}`}/>

      





{/* <span className='title'>Loan Per Month </span>
<span className='title' style={{textDecoration:"unserline"}}>
  {""}
  Total Loan Amount - {numberWithCommas((emi*tenure).toFixed(0))}
</span>
<div>
    <input
      type='range'
      min={calculateEMI(cost)}
      max={calculateEMI(0)}
      value={emi}
      className='slider'
      onChange={updateDownPayment}
    />
    <div className='labels'>
      <label>{numberWithCommas(calculateEMI(cost))}</label>
      <b>{numberWithCommas(emi)}</b>
      <label>{numberWithCommas(calculateEMI(0))}</label>
    </div>
</div> */}
      

<span className='title'>Tenure</span>
<div className='tenure-container'>
    {tenureData.map((t)=>{
          return(
            <button className={`tenure ${t===tenure?"selected":""}`} onClick={()=>{setTenure(t)}}>{t}</button>
          )
        })}
</div>
     

    </div>
  );
}

export default App;
