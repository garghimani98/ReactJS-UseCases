import React from 'react';

export default function Checkbox({title,checked,onChange}) {
  return (
    <div >
    <input type='checkbox' checked={checked} onChange={onChange}/>
    <label>{title}</label>
   </div>
  )
}
