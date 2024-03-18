import { useState } from 'react';
import './App.css';

import {PasswordStrengthIndicator} from './passwordstrengthindicator.js';
import usePasswordGenerator from './hooks/password-generator';
import Checkbox from './components/Checkbox.js';

import Button from './components/Button.js';

function App() {

  const [length,setLength]=useState(4);
  const [checkboxData,setCheckboxData]=useState([
    {title:"Include uppercase letters" , state:false},
    {title:"Include Lowercase letters" , state:false},
    {title:"Include Numbers" , state:false},
    {title:"Include Symbols" , state:false},

  ]);

  const [copy,setCopy]=useState(false);

  const handlecheckboxchange=(i)=>{
      const updatedcheckboxdata=[...checkboxData];
      updatedcheckboxdata[i].state=!updatedcheckboxdata[i].state;
      setCheckboxData(updatedcheckboxdata);
  }

  const {password,errorMessage,generatePassword}=usePasswordGenerator();
  
  const handleCopy=()=>{
      navigator.clipboard.writeText(password);
      setCopy(true);
      setTimeout(()=>{
         setCopy(false);
      },1000)
  }
  
  return (
    <div className="container">
     <div className='header'>
        <span>{password}</span>
        <Button title={copy?"Copied":"Copy"} customclass={'copyBtn'} onClick={()=>handleCopy()} />
        
     </div>

     <div className='charlength'>
      <span>

          <label>Character Length</label>
          <span>{length}</span>
      </span>
      
      <input type='range' min={4} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>

     </div>

     <div className='checkboxes'>
        {
          checkboxData.map((checkbox,i)=>{
            return(
                <Checkbox index={i} title={checkbox.title} checked={checkbox.state} onChange={()=>handlecheckboxchange(i)}/>
            )
          })
        }
     </div>


    {/* Password strength */}
    <PasswordStrengthIndicator password={password}/>

     {errorMessage &&(<div className='Errormessage'>
      {errorMessage}
     </div>)}

     <div>
     <Button title={"Generate Password"} customclass={"generateBtn"} onClick={()=>{generatePassword(checkboxData,length)}} />
      
     </div>

    </div>
  );
}

export default App;
