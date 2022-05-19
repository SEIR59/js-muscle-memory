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


    const object1 = {name: 'One', location: 'Remote', age: 1};
    const object2 = {name: 'Two', location: 'San Francisco'};
    
    function valuePair(obj1, obj2, key) {
        let array = []

        array.push(obj1[key])
        array.push(obj2[key])
        return array;
}
    console.log(valuePair(object1, object2, 'location'))
    console.log(valuePair(object1, object2, 'name'))
// 


            
        
           



// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i ++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newsentence += char;
//         }
//     }
//     return newSentence
// }







