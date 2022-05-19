/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    for (let i = 0; i <= oddRange.length; i++)
    if (oddRange[i] % 3 === 0) {
        console.log(oddRange[i]) 
    } else {
        console.log("even")
    }
}

console.log(oddRange([1, 2, 3, 4, 5, 6, 7]));