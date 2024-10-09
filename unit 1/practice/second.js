let arr = [1,1,1,4,4,4,4,4,4,6,6,6,6,5,5,5,5,5];
let fcount =0;
let ccount =0;
let num ;
for(let i=0; i<arr.length; i++){
   if(ccount===0 ){
       ccount ++;
   }
   else if(ccount>0 && arr[i-1]===arr[i]){
      ccount++;
   }
   else if(ccount>0 && arr[i-1]!==arr[i]){
    if(fcount<ccount){
        fcount = ccount;
        num = arr[i-1];
    }
    ccount =1;
   }
   
}
if(fcount<ccount){
    fcount = ccount;
    ccount =0;
    num = arr[arr.length-1];
}

console.log(num,fcount);
