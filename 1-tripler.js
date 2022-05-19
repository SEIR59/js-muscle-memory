/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    const nums = [];

    for (i = 0; i < array.length; i++) {
    let newArr = array[i];
    
    let multi = newArr * 3
    console.log(multi)

    nums.push(newArr)
    }
    return nums
}


  console.log(tripler([1,2,3]));
  console.log(tripler([4,1,7]));