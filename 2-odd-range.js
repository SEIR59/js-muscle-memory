/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    let seed = [1]
    //while the first array value+2 is less than the end, stick it in front.
    while(seed[0]+2 < end) {seed.unshift(seed[0]+2)}
    //reverse the array to give the desired array
    return seed.reverse()
}
console.log(oddRange(30))
