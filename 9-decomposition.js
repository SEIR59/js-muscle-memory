/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

function isPrime(number) {
    //need to determine if a number is a prime or not

    //1 is not a prime number, eliminate 1
    if (number === 1){
        return false;
// used this resource to help me understand how to test for the prime numbers: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
    }else if (number === 2) {
        return true;
    //    
    }else {
        for (i = 2; i< number; i++){
            //if it can be divided by anything, then it's not a prime number
            if(number % i ===0){
                return false;
            }else {
                return true;
            }
        }
    }
}
// console.log(isPrime(17));
// console.log(isPrime(24));
  
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
  let array = [];
  for (let i = 0; array.length < n; i++) {
    if (isPrime(i) === true) {
      array.push(i);
    }
}
return array
}

// console.log(firstNPrimes(4));

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/
//jordan helped me with this. I still don't understand this totally and need to review it more
function sumOfNPrimes(n) {
    let iHateThis = firstNPrimes(n)
    function add(total, newNumber){
        return total + newNumber
    }
    let sum = iHateThis.reduce(add)
  return sum
}

console.log(sumOfNPrimes(4))