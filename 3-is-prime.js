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

///code souce is from:https://www.programiz.com/javascript/examples/prime-number#:~:text=A%20prime%20number%20is%20a,the%20first%20few%20prime%20numbers.

function isPrime(number) {
  if (number === 1) {
    return;
  } else {
    //loop from 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(9));
console.log(isPrime(2017));
