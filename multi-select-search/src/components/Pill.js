import React from 'react';
import '../App.css';


export default function Pill({image,text,onClick}) {
  return (
    <span className='user-pill' onClick={onClick}>
        <img src={image} alt={text}/>
        <span>{text} &times; </span>
    </span>
  );
};
