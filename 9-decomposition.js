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
    //corner cases? what is corner cases anyway?
    if (number <= 1) {
        return false
    }
    if (number <= 3) {
        return true
    }
    //check the middle five numbers in the below loop
    if (number % 2 === 0 || number % 3 === 0) {
        return false
    }
    // (6*n + 1) or(6*n - 1) => prime number. Need to revisit to see how they calculate this formula for prime number?
    // we have to go for every multiple of 6 and
    // prime number would always be 1 less or 1 more then
    // the multiple of 6.
    for (let i = 0; i * i <= number; i = i + 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false
        }else {
            return true
        }
    }
}
console.log(isPrime(2))
console.log(isPrime(1693))
console.log(isPrime(15))
console.log(isPrime(303212))

  
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
    const arr = [];
    let i = 0;
    while (arr.length < n) {
        if (isPrime(i)) {
            arr.push(i);
        }
        i += 1;
    }
    return arr;
}
console.log(firstNPrimes(4)); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
    let num = firstNPrimes(n);//num is an array
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum)
}

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17