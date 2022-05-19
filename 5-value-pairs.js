/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

FUNCTION !RETURNS! AN !ARRAY! = MAKE NEW ARRAY FOR VALUES OF OBJECT KEYS

Examples:

const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

valuePair(object1, object2, 'location'); // => [ 'Remote', 'San Francisco' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
    const newArray = [];    //create blank array to push values into
    newArray.push(obj1[key]);
    newArray.push(obj2[key]);
    return newArray;
    // return [obj1[key],obj2[key]] also works
}

const object1 = {name: "One", location: "Remote", age: 1};
const object2 = {name: "Two", location: "San Francisco"};

console.log(valuePair(object1, object2, "location"));
console.log(valuePair(object1, object2, "name"));