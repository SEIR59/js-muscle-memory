/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    // Create an empty array to store values
    let oddArray = []

    // For each number from 1 to end
    for (i = 0; i <= end; i++){

        // If the number is odd, push the value into oddArray
        if (i % 2 === 1) oddArray.push(i)
    }
    // Return oddArray
    return oddArray
}

