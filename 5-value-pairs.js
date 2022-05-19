/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

valuePair(object1, object2, 'location'); // => [ 'Remote', 'San Francisco' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

const objectOne = {
    name: 'One',
    location: 'Remote',
    age: 1
}

const objectTwo = {
    name: 'Two',
    location: 'San Francisco'
}

const valuePair = (object1, object2, key) => {
    let newArray = []
    newArray.push(` ${object1[key]}`)
    newArray.push(`${object2[key]}`)
    return newArray
}

console.log(valuePair(objectOne, objectTwo, 'location'))

