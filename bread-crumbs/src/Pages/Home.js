import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [trendingProducts,setTrendingProducts]=useState([]);

    useEffect(()=>{
        
        fetch("https://dummyjson.com/products").then((res)=>res.json()).then((res)=>{
            const slicedproduct=res.products.slice(0,6);
            setTrendingProducts(slicedproduct);
            console.log(trendingProducts)
        })
    },[])

  return (
    <div>
        <h1>Home Page</h1>

        <span>Trending products</span>
        <div className='product-grid'>
                {
                  trendingProducts.map((product)=>{
                            return(
                              <div key={product.id} className='product-card'>
                                        <Link to={`/products/${product.id}`}>
                                             <img src={product.thumbnail} alt={product.title}/>
                                             <h3>{product.title}</h3>


                                        </Link>
                              </div>
                            )
                  })
                }
        </div>
        <Link to="/products">
          <button style={{width:"100%", padding:10}}>View All Products</button>
        </Link>
    </div>
        
  )
}
