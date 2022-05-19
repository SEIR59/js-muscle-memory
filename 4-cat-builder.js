/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }

const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

// "Classes are in fact 'Special Functions'" -MDN Web
// Create a class of Cat
class Cat {
    // Give the constructor parameters
    constructor(name, color, toys){
        // let the parameters be the instanced parameters
        this.name = name
        this.color = color
        this.toys = toys
    }
}

// Create a new cat
const newCat = new Cat('Garfield', 'golden', ['scratching-post', 'yarn'])

// Console log the new cat
console.log(newCat)