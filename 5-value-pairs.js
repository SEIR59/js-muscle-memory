/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
*/
const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

console.log(valuePair(object1, object2, 'location')); // => [ 'Remote', 'San Francisco' ]
//valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]


function valuePair(chicken, volfe, zebra) {

let arr = [];
arr.push(chicken[zebra])
arr.push(volfe[zebra])
return arr;
}
