/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

// √
function tripler(array) {
    array.forEach((element, index) => {
        array[index] = element * 3;
        return element;
    });
}

let arrNums = [1,2,3];
console.log(arrNums);
tripler(arrNums);
console.log(arrNums);
