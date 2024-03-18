
import './App.css';
import { useEffect, useState } from 'react';

const ITEMS_PER_PAGE=6;
const API_ENDPOINT="https://hacker-news.firebaseio.com/v0";
// const EXAMPLE_RESPONSE={
//   "by":"jshchnz",
//   "id":39495125,
//   "score":1,
//   "time":1708808519,
//   "title":"Emerge (YC W21) is hiring a growth engineer (remote)",
//   "type":"job",
//   "url":"https://www.emergetools.com/careers/jobs/growth-engineer"
// }





function JobPosting({url,title,by,time}){
  const formatteddate=new Date(time*1000).toLocaleString();

         return(
          <div className='post' role='listitem'>
            
            <h2 className='post_title'>
              <a className={url?"":"inactiveLink"}
               href={url}
               target='_blank'
               rel="noopener">
                {title}
              </a>
            </h2>
              <span className='post_metadata'>
                 By {by} : {formatteddate}
              </span>
          
          </div>

         )
}

function App() {
  const [items,setItems]=useState([]);
  const [itemIds,setItemIds]=useState(null);
  const [fetchingdetails,setFetchingdetails]=useState(false);
  const [currentPage,setCurrentPage] =useState(0);
  const fetchitems=async(currPage)=>{
               setCurrentPage(currPage);
               setFetchingdetails(true);
               let itemsList=itemIds;
               if(itemsList===null){
                const response =await fetch(`${API_ENDPOINT}/jobstories.json`)
                itemsList=await response.json();
                setItemIds(itemsList);
               }

               const itemIdsForPage=itemsList.slice(
                currPage*ITEMS_PER_PAGE,currPage*ITEMS_PER_PAGE+ITEMS_PER_PAGE);


               const itemsForPage=await Promise.all(
                itemIdsForPage.map(itemId=>fetch(`${API_ENDPOINT}/item/${itemId}.json`).then(res=>res.json())
                )
               )

               setItems([...items,...itemsForPage]);
               setFetchingdetails(false);
  }

  useEffect(()=>{
            if(currentPage===0) fetchitems(currentPage);
  },[])
  return (
    <div className="App">
      <h1 className='title'>Hacker News Job Board</h1>
      {
        itemIds===null||items.length<1?(<p className='loading'>Loading...</p>):(
            <div>
              <div className='items' role="list">
                     {items.map((item)=>{
                      return <JobPosting  key={item.id} {...item}/>
                     })}
              </div>
               <button disabled={fetchingdetails} className='load-more-button' onClick={()=>{fetchitems(currentPage+1)}}>{fetchingdetails?"loading...":"load more jobs.."}</button>
            </div>
        )
      }
    </div>
  );
}

export default App;
