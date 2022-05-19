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
    //  let array =[];
    //  array.push(obj[key])
    //  console.log(array)
    //  if (array.length === 0){
    //      return false;
    //  }else{
    //      return true;
    //  }
    console.log(key in obj)
    if (key in obj === true){
        return true
    }
    else{ return false}
    
}
