import React from 'react';

import { Link,useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
    const {pathname}=useLocation();
    console.log(pathname);

    const pathnames=pathname.split('/').filter((x)=>x);
    let breadcrumbPath='';

  return (
    <div>
        <h2>Breadcrumbs</h2>
        <div>
            <Link to="/">Home</Link>
            {
                pathnames.map((name,index)=>{
                    breadcrumbPath +=`/${name}`;
                    const isLast =index === pathnames.length-1;
                    return isLast ? (<span key={breadcrumbPath}>/{name}</span>) : (<span key={breadcrumbPath}>/<Link to={breadcrumbPath}>{name}</Link></span>)
                })
            }
        </div>

    </div>
  )
}
