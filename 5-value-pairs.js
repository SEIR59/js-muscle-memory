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

function valuePair(obj1, obj2, key) {
    //leaving these comments in as I didn't realize I needed bracket notation to access a key if it's not hard-coded into the object itself (THANK YOU TA'S!!!!)
    // console.log(key) // logs 'name'
    // console.log(obj1.name) // logs 'One'
    // console.log(obj1.key) // logs undefined
    //console.log(obj1[key]) // logs 'One'
    const answerArr = []
    answerArr.push(`${key}: ${obj1[key]}`)
    answerArr.push(`${key}: ${obj2[key]}`)
    return answerArr
}
console.log(valuePair(object1, object2, 'name'))