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

function isPrime(number) {
    for (let i = 0; i <= number; i++) {
        if (number %3 === 0 || %9 === 0){ //struggled with this syntax: setting two integers that the passed integer can be divided by 
            return true
        } else {
            return false
        }
    }
}

