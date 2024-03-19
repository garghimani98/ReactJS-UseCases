import "../App.css";
import { useEffect } from "react";

const Home=()=>{
    useEffect(()=>{
        console.log("this is home page");
    },[]);
   
    return(
          <div className="page">this is home page for new branch WEB-3-figure-out-plan-for-checkout-process</div>
    )
}


export default Home;