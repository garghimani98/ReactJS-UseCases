import React , { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export default function ProductListing() {


  const [products,setProducts]=useState([]);

    useEffect(()=>{
        
        fetch("https://dummyjson.com/products").then((res)=>res.json()).then((res)=>{
            
        setProducts(res.products);
        })
    },[])

  return (
    <div>
    <span>ProductListing</span>
            <div className='product-grid'>
                    {
                      products.map((product)=>{
                                return(
                                  <div key={product.id} className='product-card'>
                                            <Link to={`/products/${product.id}`}>
                                                <img src={product.thumbnail} alt={product.title}/>
                                                <h3>{product.title}</h3>
                                                <h3>{product.price}</h3>
                                            </Link>
                                  </div>
                                )
                      })
                    }
            </div>
            
        </div>
        

    
  )
}
