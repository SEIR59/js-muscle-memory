/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/


const myArray = [1, 2, 3, 4]
const newArray = []

function tripler(array) {
  for (i = 0; i < array.length; i++) {
    let pee = array[i] * 3 
    newArray.push(pee)
    
}return newArray
  
  
}

console.log(tripler(myArray))