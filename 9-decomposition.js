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
    if(number === 1){
        return false;
    }else if(number === 2){
        return true;
    }else{
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
}
  
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
    let newArray = [];
     for (let i = 1; newArray.length < n; i++) {
        if (isPrime(i)) {
           newArray.push([i]);
         }
     }
     return newArray;
 }
 firstNPrimes(4);
 console.log(firstNPrimes(4));

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
    let sumNumbers = 0;
    const primeNumbers = firstNPrimes(n);
    for (i = 0; i < primeNumbers.length; i++) {
        sumNumbers += primeNumbers[i]
    }
    return sumNumbers;
}

console.log(sumOfNPrimes(4));