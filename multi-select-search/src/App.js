
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Pill from './components/Pill';

function App() {
  const [searchTerm , setSearchTerm]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [selectedusers,setSelectedusers]=useState([]);
  const [selectedUserSet , setSelectedUserSet]=useState(new Set());
  const inputRef=useRef();

  
  useEffect(()=>{


    const fetchUsers=()=>{
      if(searchTerm.trim() === ""){
        setSuggestions([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res)=>res.json())
        .then((data)=>setSuggestions(data))
        .catch((error)=>console.log(error)); 
        }

    fetchUsers();

  },[searchTerm]);
  
  const handleselectusers=(user)=>{
    console.log(user);
    
    setSelectedusers([...selectedusers,user]);
    
    setSearchTerm("");
    setSuggestions([]);
    setSelectedUserSet(new Set([...selectedUserSet,user.email]));
    
    inputRef.current.focus();

  }

  console.log(selectedusers);

  const handleRemoveuser=(user)=>{
    const selectedusers1=selectedusers.filter((selecteduser)=>selecteduser.id!==user.id);
    
    setSelectedusers(selectedusers1);
    const updatedset=new Set(selectedUserSet);
    updatedset.delete(user.email);
    setSelectedUserSet(updatedset);

  }

  const handlekeydown=(e)=>{
    if(e.key==="Backspace" && e.target.value==="" && selectedusers.length>0){

      const lastuser=selectedusers[selectedusers.length-1];
      handleRemoveuser(lastuser);
      setSuggestions([]);
    }
  }
  
  return (
    <div className="user-search-container">

       <div className='user-search-input'>

        {/* pills */}
        {
          selectedusers?.map((user)=>{
            console.log(user.email);
            return <Pill key={user.email} image={user.image} text={`${user.firstName} ${user.lastName}`} onClick={()=>{handleRemoveuser(user)}} />})
        }
        
        {/* input field with search suggestions */}
          <div>
            <input ref={inputRef} type='text' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)} } placeholder='search user..' onKeyDown={handlekeydown}/>
            {/* Search Suggestions */}
            <ul className="suggestions-list">
              {suggestions?.users?.map((user,index)=>{
                return !selectedUserSet.has(user.email)?(<li key={user.email} onClick={()=>handleselectusers(user)}>
                  <img src={user.image} alt={`${user.firstName} ${user.lastName}`}/>
                  <h5>{user.firstName} {user.lastName}</h5>
                </li>):(<></>);
              })}
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
