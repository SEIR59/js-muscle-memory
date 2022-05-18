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
    if(number ===2){return true}
    //check if the number is divisible by 2. Apparently I can't use 'return' in this format.
    let checker = (number % 2 === 0 ? true : false)
    //if it's even, it's definitely not prime.
    if (checker){return false}

    //make a list of odd numbers between 3 and number-1/2. Do you know a better way to generate a list of numbers? Not just [0,1,2...] but adjust them, [3,4,5]?
    let oddArr = Array.from(Array(Math.floor((number - 2) / 2)).keys()).map((x) => x + 2).filter((x) => x%2 == 1)
    //if one of those numbers has mod 0, it is not prime
    return (oddArr.map((x) => number%x).includes(0) == false)
}
console.log( '19' , isPrime(19))