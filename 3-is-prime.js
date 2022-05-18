/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/
// If n is not prime, it can be factored into a and b
// a and b can't be greater than the square root of n since the largest number both can factor down into is the square root
// without one being smalled than the square root. If we can't find any factors less than or equal to the sqrt, n must be prime


function isPrime(number) {
    // If the number is 2, it is prime
    if (number === 2) return true

    // A number is prime if it is only divisible by itself and 1. Take the square root
    let sqrt = Math.sqrt(number)

    // For every number from 2 to the square root of the number
    for (let i = 2; i < sqrt; i++){
        
        // If the number is divisible by any, return false
        if (num % i === 0) return false
    }
    return true;
}

