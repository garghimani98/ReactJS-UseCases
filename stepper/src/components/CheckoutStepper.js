import React, { Fragment, useEffect, useRef, useState } from 'react';
import '../App.css';

export default function CheckoutStepper({stepsConfig=[]}) {

    const [currentStep,setcurrentStep]=useState(1);
    const [completed,setCompleted]=useState(false);
    const [margins,setMargins]=useState({
        marginLeft:0,
        marginRight:0,
    });

    const stepRef=useRef([]);


    //we will calculate the width of first and lest element of stepsconfig , we will remove the left part of width equal to half of first element width +
    //right part of width equal to last element width from progress bar

    useEffect(()=>{
             setMargins({
                marginLeft : (stepRef.current[0].offsetWidth)/2,
                marginRight : (stepRef.current[stepsConfig.length-1].offsetWidth)/2,
             });
    },[stepRef,stepsConfig.length]);

    
    if(stepsConfig.length===0){
        return (<></>);
    }
   
    const handleNext=()=>{
              console.log(stepRef.current[0].offsetWidth/2);
              console.log(stepRef.current[stepsConfig.length-1].offsetWidth/2);
              setcurrentStep((prev)=>{
                if(prev===stepsConfig.length){
                    setCompleted(true);
                    return prev;
                }
                else{
                    return prev+1;
                }
              })


    }
  
    const calculateProgressBarWidth=()=>{
        return ((currentStep-1)/(stepsConfig.length-1))*100;
        
    }
    const ActiveComponent= stepsConfig[currentStep-1]?.Component;
   
        return (
            <Fragment>
                <div className='stepper'>
                    
                    { stepsConfig.map((step,index)=>{
                            return(
                                <div key={step.name} ref={(ele)=>stepRef.current[index]=ele} className={`step ${currentStep>index+1||completed?"complete":""} ${currentStep===index+1?"active":""}`}>
                                    <div className='step-number'>
                                        {currentStep>index+1|| completed?
                                            (<span>&#10003;</span>):
                                        (index+1)}
                                    </div>
                                    <div className='step-name'>{step.name}</div>
                                </div>
                            )
                        })
                    }

                    <div className='progress-bar' style={{width:`calc(100%-${margins.marginLeft + margins.marginRight}px)`,
                                    marginLeft:margins.marginLeft,
                                    marginRight:margins.marginRight
                                    }}
                                    >

                                    <div className='progress' style={{width:`${calculateProgressBarWidth()}%`}}></div>
                    </div>


                    
                </div>

                

                <ActiveComponent />

                {!completed && <button className="btn" onClick={handleNext}>{currentStep===stepsConfig.length?"Finish":"Next"}</button>}
                
                

            </Fragment>
            
        )
    
  
  
}
