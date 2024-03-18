import React, { useState } from 'react'
import explorer from '../data/Folderdata';

export default function Folder({exp,handleInsertNode}) {
    const [expand,setExpand]=useState(false);
    const [showinput,setshowinput]=useState({
            visible:false,
            isFolder:null
    })


    const handleNewFolder=(e,isFolder)=>{
          e.stopPropagation();
          setExpand(true);
          setshowinput(
            {visible:true,isFolder})
    }

    const addNewFolder=(e)=>{
           if(e.target.value && e.keyCode===13)
           {
            //addlogic
            handleInsertNode(exp.id,e.target.value,showinput.isFolder);
            setshowinput({...showinput,visible:false});
           }

    }
    
  if(explorer.isFolder){
    return (
        <div style={{marginTop:"5"}}>
            <div onClick={()=>{setExpand(!expand)}} className='folder'>
                <span>{exp.name}</span>
                <div>
                    <button onClick={(e)=>{handleNewFolder(e,true)}}> 📂Folder </button>
                    <button onClick={(e)=>{handleNewFolder(e,false)}}> 📃 File</button>
                </div>
    
                
            </div>
            <div style={{display:expand?"block":"none",paddingLeft:25}}>

                { showinput.visible && (
                    <div className='inputContainer'>
                        <span>{showinput.isFolder?"📂":"📃"}</span>
                        <input className="inputContainer__input" type='text' 
                        autoFocus 
                        onBlur={()=>{setshowinput({...showinput,visible:false})}} 
                        onKeyDown={(e)=>{addNewFolder(e)}}/>
                       
                    </div>
                )
                }

                {
                   
                    expand && exp.items.map((ele,id)=>{
                    return(
                    <Folder key={id} exp={ele} handleInsertNode={handleInsertNode}/>
                    ) 
                    })
    
                }
            </div>
        </div>
      )
  }
  
  else{
           return <span className='file'>{exp.name}</span>
  }
}
