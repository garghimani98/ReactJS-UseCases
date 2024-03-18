import React from 'react'

export default function usefolderhook() {

    const addfolder=(tree,folderid,item,isFolder)=>{
        if(tree.id===folderid && tree.isFolder)
        {
            tree.items.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder,
                items:[]
            });

            return tree;
        }
       

        const nestedtree=[];
        nestedtree=tree.items.map((ele)=>{
            return addfolder(ele,folderid,item,isFolder);
        });

        return ({...tree,items:nestedtree});
            
    }

  return {addfolder};
}
