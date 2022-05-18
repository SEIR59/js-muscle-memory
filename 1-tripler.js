/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/


let triple = [1, 2, 3, 4, 12, 7, 10]

    function tripler(array) {
        let result = 0
        for (let i = 0; i , triple.length; i++){
            result = triple[i] * 3;
        }
        return result
    }
    console.log(tripler(triple));
