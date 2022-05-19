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
    //need to determine if a number is a prime or not

    //1 is not a prime number, eliminate 1
    if (number === 1){
        return false;
// used this resource to help me understand how to test for the prime numbers: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
    }else if (number === 2) {
        return true;
    //    
    }else {
        for (i = 2; i< number; i++){
            //if it can be divided by anything, then it's not a prime number
            if(number % i ===0){
                return false;
            }else {
                return true;
            }
        }
    }
}
console.log(isPrime(17));
console.log(isPrime(24));
