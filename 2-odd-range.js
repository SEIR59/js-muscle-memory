/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    //will probably need a for if loop where you use i%2 !==0

    //create the array you will need to push into
    let newArray = []
    // console.log("testing")
    // console.log(end);
   //
    for (let i=1; i<= end; i++){
        
        if (i%2 !==0){
            // console.log(i)
            newArray.push(i);
            // console.log(newArray);
        } 
        // console.log(newArray);
        // console.log(end.length);
    }
    //don't forget to return the new array

    return newArray;

}

console.log(oddRange(6));