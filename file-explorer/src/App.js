import { useState } from 'react';
import './App.css';
import explorer from './data/Folderdata.js';
import Folder from './components/Folder.js';
import usefolderhook from './hooks/usefolderhook.js';

function App() {
  const [explorerData,setExplorerData]=useState(explorer);
  const {addfolder}=usefolderhook();

  const handleInsertNode=(folderId,item,isFolder)=>{
   const finaltree=addfolder(explorerData,folderId,item,isFolder);
   setExplorerData(finaltree);
  }
  
  return (
    <div className="App">

      <Folder exp={explorer} handleInsertNode={handleInsertNode}/>

      
    </div>
  );
}

export default App;
