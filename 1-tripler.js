/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    let newArray = array.map(num => num * 3)
    console.log(newArray)
}
let nums = [2, 3, 4, 5]

tripler(nums)


