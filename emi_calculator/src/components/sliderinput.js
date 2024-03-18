import React,{Fragment} from 'react'
import { numberWithCommas } from '../utils/config';
import '../App.css';

export default function Sliderinput({title,state,min,max,onChange,labelMin,labelMax,underLineTitle}) {
  return (
    <div>
        <Fragment>
            <span className='title'>{title}</span>
            {state > 0 && (
                <span className='title' style={{textDecoration:"underline"}}>
                    {" "}
                    {underLineTitle}
                </span>)
            }
            <div>
                <input
                    type='range'
                    min={min}
                    max={max}
                    className='slider'
                    value={state}
                    onChange={onChange}
                />
                <div className='labels'>
                    <label>{labelMin ?? numberWithCommas(min)}</label>
                    <b>{numberWithCommas(state)}</b>
                    <label>{labelMax ?? numberWithCommas(max)}</label>
                </div>
            </div>
        </Fragment>


      
    </div>
  )
}
