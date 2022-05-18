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
    if (number === 2) {
        return true;
    }
    for (let i = 2; i < number; i++){
        if (number  % i === 0 ) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(2)); // => true
// console.log(isPrime(1693)); // => true
// console.log(isPrime(15)); // => false
// console.log(isPrime(303212)); // => false


/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
    // check to make sure the entry is a positive number.
    if (isNaN(n) || n === null || n < 0) {
        return console.log("Please enter a positive number!")
    }
    // return console.log("we made it!");
    let arrPrimeNums = [];
    let primeCount = 0;
    let nums = 2;
    while( primeCount < n) {
        if(isPrime(nums)) {
            arrPrimeNums.push(nums);
            primeCount++;
        }
        nums++;
    }
    return arrPrimeNums;
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

function sumOfNPrimes(n) {
    let arrPrimesToSum = firstNPrimes(n);
    console.log(arrPrimesToSum);
    let sumTotal = arrPrimesToSum.reduce((prev, cur) => {
        return prev + cur;
    })
    return sumTotal;
}

console.log(sumOfNPrimes(1));
