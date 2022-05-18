/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}
doesKeyExist(obj1, 'company'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}

function doesKeyExist(obj, key) {
    //need an if else to test if key is in object
    //object.keys give me an array - need to make the keys variable into an array
    let keys =Object.keys(obj)
    // console.log(key)
    //use .includes to see if the array includes the key
    if (keys.includes(key)){
        return true
    }else {
        return false
    }
}

console.log(doesKeyExist(obj1, 'company'));
console.log(doesKeyExist(obj1, 'name'));