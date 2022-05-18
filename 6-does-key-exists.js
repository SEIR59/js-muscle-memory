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

const doesKeyExist = (obj, key) => {
    let isExist = false;
    Object.keys(obj).forEach(objKey => {
        if(objKey === key){
            isExist = true;
        }
    });
    return isExist;
}