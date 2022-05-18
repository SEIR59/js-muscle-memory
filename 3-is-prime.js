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
function oddRange(end) {
    let solution = []
    let i = 1
    while(i<end){
        solution.push(i)
        i+=2
    }
    return solution
}
function isPrime(number) {
    if(number ===2){return true}
    
    //if it's even, it's definitely not prime, besides 2
    let checker = (number % 2 === 0 ? true : false)
    if (checker){return false}

    //used js-2 function to generate odd range. If it contained an even factor, %2 would have found it.
    let oddArr = oddRange((number-1)/2)

    //if one of those numbers has mod 0, it is not prime
    return (oddArr.map((x) => number%x).includes(0) == false)
}
console.log( '19' , isPrime(19))