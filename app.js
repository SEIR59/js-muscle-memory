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
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // the number that is sentence.length - 1