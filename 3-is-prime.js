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
    if (number === 2){
        return true
    } else if (number > 1) {
        for (let i = 2; i < number; i++){
            if (number % i !== 0){
                return true;
            } else if (number === i * 1) {
                return false
            } else {
                return false
            }
        }
    } else {
        return false
    }
}
console.log(isPrime(40));
