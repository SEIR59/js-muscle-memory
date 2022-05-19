/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    let a = [];
     
     if(end%2 !== 0){
     for(let i=0; i <= Math.floor(end/2); i++){
       a[i] = i*2+1;
     }  
     return a;
     }
     
     else if(end%2 === 0){
       for(let i=0; i <= ((end/2)-1); i++){
       a[i] = i*2+1;
     }  
       return a;
      
     }
     
     
   }