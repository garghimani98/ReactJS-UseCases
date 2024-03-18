import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export default function ProductDetails() {

  const { id }=useParams();
  //const [loading,setLoading]=useState(false);

  const [product,setProduct]=useState(null);
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`).then((res)=>res.json()).then((res)=>{
      setProduct(res);
    }

    
  );},[id]);
  console.log(product);

  return (
    <div>
      <h2>{product?.title}</h2>
      {
      product?(
        <div style={{display:"flex"}}>
          <img style={{ height:300}} src={product.thumbnail} alt={product.title}/>
          <div>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
          </div>
          
        </div>
        
      ):<p>Loading...</p>
      }
    </div>
  )
}
