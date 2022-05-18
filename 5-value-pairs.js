/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
*/
const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

function valuePair(obj1, obj2, key) {
    let array = []
    //can't access through dot notation it has to be bracket because key is a variable.
    array.push(obj1[key])
    array.push(obj2[key])
    return array
}
console.log(valuePair(object1, object2, 'location')); // => [ 'Remote', 'San Francisco' ]
//console.log(valuePair(object2, object2, 'name')); // => [ 'One', 'Two' ]