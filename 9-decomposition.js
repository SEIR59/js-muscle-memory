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

let lastEntry = 1
let workingOddArray = []

function oddRangeRefined(end) {
    while(lastEntry<end){
        lastEntry+=2
        workingOddArray.push(lastEntry)
    }
}

function isPrimeRefined(number) {
    let i = 0
    let end = number/2
    if (end > lastEntry){
        oddRangeRefined(lastEntry + 500)
    }
    while(number%workingOddArray[i] !== 0 && workingOddArray[i] < end){
        i++
    }
    if (workingOddArray[i] > end){
        return true
    }else{
        return false
    }
}
//console.log( '19' , isPrime(19))
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
    if(n===1){
        return [2]
    } else{
        nPrimes.push(2)
    }
    let j = 3
    while (nPrimes.length<n){
        isPrimeRefined(j) ? nPrimes.push(j) : false
        j+=2
    }
    return nPrimes
}
//console.log('checking 5' ,firstNPrimes(5))

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
    let start = new Date()
    let sumNPrimes = firstNPrimes(n).reduce((x,y)=>x+y)
    let end = new Date() - start
    return [sumNPrimes , end]
}
let x = 10000 //doing 10x this, 100,000 took my laptop about 17s.
console.log(`checking sum of first ${x} primes in format [sum, calculation-time]` , sumOfNPrimes(x))