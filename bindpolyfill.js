const obj={
    "name":"himani",
    "age":21
}



function printname(country,hometown){
    console.log(this.first+" "+this.age+" "+country +" "+hometown);
}


function.Prototype.mybind=function(obj,...args)
{
const fn=this;
return function(...params){
    fn.apply(obj,[...args,...params]);
}
}


const betterfunction1=printname.mybind(obj,["india"]);
betterfunction1("hometown");


const debouncefunction(fn,d){
    let timer;
    const obj=this;
    const args=arguments;
    return function(){
        clearInterval(timer);
        timer=setTimeout(()=>{
            fn();
        },d);
    }
}

//callbacks were used before ES6 got introduced
fetch("http://example.com/movies.json")
.then((response)=>response.json())
.then((val)=>console.log(val));

fetch("http://example.com/movies.json",(response,error)=>{
    if(error)
    throw(error);
})

let val=response.val;
printresponse(val,(Error,val)=>{
    if(Error)
    throw(Error);
    console.log(val);
})

//promises introduced in ES6
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(users=>{
    const firstuser=users[0];
    console.log(firstuser);
    return(fetch("https://jsonplaceholder.typicode.com/usersposts?userId="+firstuser.id))



})
.then(posts=>posts.json())
.then(response=>console.log(response));


//ES7 provided us async await

async function checkasyncoperations(){
    //will pause execution until what is being awaited in not completed
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await response.json();
    const firstuser=await users[0];
    console.log(firstuser);
    const posts=await fetch("https://jsonplaceholder.typicode.com/usersposts?userId="+firstuser.id);
    const response1=posts.json();
    console.log(response);


}
checkasyncoperations().catch(error=>{
    console.log(error);
})

const pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(fetch("https://jsonplaceholder.typicode.com/users"));
    },1000);
})

async function checkasyncoperations(){
    //will pause execution until what is being awaited in not completed
    console.log("function started")
    const response=await pr1;
    console.log("response is "+response);
    const users=await response.json();
    console.log(users);
    const firstuser=await users[0];
    console.log("firstuser is "+firstuser);
    const posts=await fetch("https://jsonplaceholder.typicode.com/usersposts?userId="+firstuser.id);
    const response1=posts.json();
    console.log(response);


}
checkasyncoperations().catch(error=>{
    console.log(error);
})


console.log("i am out")