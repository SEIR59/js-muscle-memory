// Practice

// DOM elements

// DOM Events

// DOM Manipulation



//document.getElementsByClassName('garden')
/* 
const myCities = document.querySelectorAll('.cities')
console.log(myCities)
const allLi = document.querySelectorAll('li')
console.log(allLi)

let container = document.querySelector('.container').children
console.log(container)

 */

// select the id one
// create a paragraph element
// add some text to the paragraph element
// append the paragraph to the id one

/* const target = document.getElementById('one')
console.log(target)
let newP = document.createElement('p')
newP.textContent = `I'm here!`
target.appendChild(newP) */

/* const exercises = [
    {
        exercise: 'dumbbell curls🏋🏽',
        bodyType: 'biceps',
        bodyPart: 'arms'
    },
    {
        exercise: 'running 🏃🏽‍♂️',
        bodyPart: 'legs'
    },
    {
        exercise: 'sit ups 🤸🏽‍♀️',
        bodyType: 'abs ',
        bodyPart: 'core'
    }
];


function addExercisesToContainer(array) {
    let container = document.querySelector('.container')
    
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each element to a variable
        let exerciseVariable = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exerciseVariable;
        container.appendChild(newElement);
    }
    
    // create a new element
    // access "exercise" key to get value
    // add value text to element (textContent)
    // append new element to container
}

addExercisesToContainer(exercises); */

// 2
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // 4
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C
let char = str2[num].toLowerCase(); // no output, just assigns variable c
console.log(char + '!'); // c!