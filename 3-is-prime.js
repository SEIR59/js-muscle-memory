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

    //check if the number is divisible by 2. Apparently I can't use 'return' in this format.
    let checker = (number % 2 === 0 ? true : false)
    //if it's even, it's definitely not prime.
    if (checker){return false}

    //make a list of odd numbers between 3 and number-1/2
    let oddArr = Array.from(Array(Math.floor((number - 2) / 2)).keys()).map((x) => x + 2).filter((x) => x%2 == 1)
    //if one of those numbers has mod 0, it is not prime
    return (oddArr.map((x) => number%x).includes(0) == false)
}
console.log(isPrime(9))