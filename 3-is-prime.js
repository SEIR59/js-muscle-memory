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
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}
isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true

