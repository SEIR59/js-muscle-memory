/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array){
    //need to create the empty array that we will be pushing the new numbers into
    const numbers = [];
    // console.log('testing')
    //make a for loop so you can loop throug and push all of the new numbers
    for (i=0; i<array.length; i++){
        //need to create the new array
        let num = array[i];
        //need to have it multiple by 3
        let byThree = num *3
        // console.log(byThree)
        //need to push this new num array into the numbers array
        numbers.push(num)
    }
    return numbers;
}
  console.log(tripler([1,2,3])); // => [ 3, 6, 9 ]
  console.log(tripler([4, 1, 7])); // => [ 12, 3, 21 ]