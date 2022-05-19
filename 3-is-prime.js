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
console.log(isPrime(2));
console.log(isPrime(10)); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true

