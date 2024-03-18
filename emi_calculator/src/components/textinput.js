import React ,{Fragment}from 'react';
import '../App.css';

export default function Textinput ({title,state,setState}) {
  return (
   
        <Fragment>
                <span className='title'>{title}</span>
                <input className='class-input'
                    type='number'
                    value={state}
                    onChange={(e)=>setState(e.target.value)}
                    placeholder={title} 
                    
                />
        </Fragment>
    
  )
}


