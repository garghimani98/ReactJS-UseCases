import "../App.css";
import { useEffect } from "react";

const Home=()=>{
    useEffect(()=>{
        console.log("this is home page");
    },[]);
   
    return(
          <div className="page">this is home page</div>
    )
}


export default Home;