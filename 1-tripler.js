/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

// function tripler(array) {
  
// }

// function tripler(nums) {
//     let Array = nums.map(function (num) {
//       return num * 3;
//     });
//     return Array
//   }

// console.log(tripler[1,2,3])
let thisArray = [1, 2, 3]

function tripler(nums) {
  nums.forEach((element, index) => {
    nums[index] = element * 3;
    return nums
  });

}
console.log(tripler([1,2,3])