/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/
const array = [1,2,3];

// function tripler(array){
// }

const tripler = array.map((array) => {
    return array * 3;
});
console.log(tripler);