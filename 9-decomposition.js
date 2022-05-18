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


***********************************************************************/

function isPrime(number) {
    if (number === 2) return true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(2)); // => true
console.log(isPrime(1693)); // => true
console.log(isPrime(15)); // => false
console.log(isPrime(303212)); // => false

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:


***********************************************************************/

function firstNPrimes(n) {
    const firstNPrimesArr = []
    let i = 2
    while (firstNPrimesArr.length < n) {
        if (isPrime(i)) firstNPrimesArr.push(i)
        i++
    }
    return firstNPrimesArr
}
console.log(firstNPrimes(0)); // => []
console.log(firstNPrimes(1)); // => [2]
console.log(firstNPrimes(4)); // => [2, 3, 5, 7]

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:


***********************************************************************/

function sumOfNPrimes(n) {
    let nArray = firstNPrimes(n)
    let sum = 0;
    //I tried to do a .reduce() on nArray but it said the values were empty
    //even after I console.logged it and it had values in it
    for (let i=0; i<nArray.length; i++){
        sum += nArray[i]
    }
    return sum
}

console.log(sumOfNPrimes(0)); // => 0
console.log(sumOfNPrimes(1)); // => 2
console.log(sumOfNPrimes(4)); // => 17