/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/
numbers = [1, 2, 3];

function tripler(num) {
  return num.map((x) => x * 3);
}

console.log(tripler(numbers));
