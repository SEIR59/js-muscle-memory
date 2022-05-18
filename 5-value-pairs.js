/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:



valuePair(object1, object2, 'location'); // => [ 'Remote', 'San Francisco' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};
console.log(object1.location)

function valuePair(obj1, obj2, key) {
    const answerArr = []
    answerArr.push(obj1.key)
    answerArr.push(obj2.key)
    return answerArr
}
console.log(valuePair(object1, object2, 'location'))