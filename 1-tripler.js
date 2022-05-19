/*******************************************************************************
// Write a function tripler(array) that takes in an array and returns a new array
// containing 3 times every element of the original array.

// Examples:

//tripler([1,2,3]); // => [ 3, 6, 9 ]
// tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
  const numbers = [];
  for (i =0 ; i < array.length; i += 1){
      let num = array [i];
      let byThree = num * 3
      numbers.push(num)   
  }
return numbers;
}
console.log(tripler([1,2,3]));
console.log(tripler([4, 1, 7]));