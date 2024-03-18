import React from 'react';

export default function Button({title,onClick,customclass}) {
  return (
    <button className={customclass} onClick={onClick}>
    {title}
    </button>
  )
}
