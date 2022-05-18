/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

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
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
    const nPrimes = []
    let j = 2
    while (nPrimes.length<n){
        isPrime(j)? nPrimes.push(j) : false
        j++
    }
    return nPrimes
}
console.log('checking 5' ,firstNPrimes(5))

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/
//i think the example 
function sumOfNPrimes(n) {
    return firstNPrimes(n).reduce((x,y)=>x+y)
}
console.log('checking 400' , sumOfNPrimes(400))