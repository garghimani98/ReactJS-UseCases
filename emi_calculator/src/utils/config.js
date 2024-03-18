export function  numberWithCommas(x){
 if(x)
 return `Rs ${x.toLocaleString('en-IN')}`;
}