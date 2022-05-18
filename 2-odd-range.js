/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    // there's probably a cleaner way to do this.

    //make an index array, add one to each value, filter out values with mod===1.
    return Array.from(Array(end).keys()).map((x)=> x+1).filter((x)=> x%2 === 1)
}
console.log(oddRange(30))