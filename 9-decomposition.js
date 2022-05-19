//Below are answers for what I hope is a speedy calculation. See previous versions for uncropped versions of the functions. 
//For example, isPrime() being able to handle even numbers. isPrimeRefined() cannot as, it only works with odd numbers, which makes it faster when summing large numbers of primes.

let lastEntry = 1
let workingOddArray = []

function oddRangeRefined(end) {

    while (lastEntry < end) {
        lastEntry += 2
        workingOddArray.push(lastEntry)
    }
}

function isPrimeRefined(number) {

    let i = 0
    let end = number / 2

    if (end > lastEntry) {
        oddRangeRefined(lastEntry + 1000)
    }

    while (number % workingOddArray[i] !== 0 && workingOddArray[i] < end) {
        i++
    }

    if (workingOddArray[i] > end) {
        return true
    } else {
        return false
    }
}

function firstNPrimes(n) {

    const nPrimes = []
    if (n === 0) {
        return []
    }

    nPrimes.push(2)
    
    let j = 3
    while (nPrimes.length < n) {
        if(isPrimeRefined(j)){nPrimes.push(j)}
        j += 2
    }

    return nPrimes
}

function sumOfNPrimes(n) {
    let start = new Date()
    let sumNPrimes = firstNPrimes(n).reduce((x, y) => x + y)
    let end = new Date() - start
    return [sumNPrimes, end]
}
let x = 10000 //doing 10x this, 100,000 took my laptop about 17s.
console.log(`checking sum of first ${x} primes in format [sum, calculation-time]`, sumOfNPrimes(x))