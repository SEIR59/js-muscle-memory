/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/


function oddRange(n) {
    let listOne = []
    for (let i = 1; i <= n; i++){
        if (i % 2 !== 0){
            listOne.push(i)
        } 
    } 
    console.log(listOne)
}

oddRange(13)