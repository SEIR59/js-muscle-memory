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

