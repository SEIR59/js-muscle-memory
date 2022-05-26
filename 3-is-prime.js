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
    let prime = true
    if(number === 1 || number === 0){
        prime = false
    } else {
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                prime = false
            } 
        }
    }
    return prime;
}

console.log(isPrime(7))

