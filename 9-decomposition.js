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
    // Let the default state of prime be true
    let prime = true

    // If the number is 1, it's not prime
    if (number === 1) prime = false

    // For each number from 2 to the number, if the number is divisible by any number, it's not prime
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            prime = false
        }
    }
    // Otherwise, the number is prime
    return prime;
}

console.log(isPrime(2)); // => true
console.log(isPrime(1693)); // => true
console.log(isPrime(15)); // => false
console.log(isPrime(303212)); // => false

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/



function firstNPrimes(n) {
    // Create an empty array to store the prime number
   let primeArray = []

   // For each number starting at two till n
   for (i = 2; primeArray.length < n; i++){
       // If the number is prime, push it to the array
       if (isPrime(i)) primeArray.push(i)
   }
   
   // Return the array
   return primeArray
}

console.log(firstNPrimes(4))



/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
    let sum = 0
    let array = firstNPrimes(n)
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

