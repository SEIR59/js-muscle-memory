// Practice

// DOM elements

// DOM Events

// DOM Manipulation


const exercises = [
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

const container = document.querySelector('.container');

const muscleMemory = container.children[0];
const title = document.querySelector('h1');
const park = document.querySelector('.park');
const garden = document.querySelector('.garden');
const cities = document.querySelector('.cities');
const citiesList = document.querySelectorAll('li');
const wrapper = document.querySelector('.wrapper');
const p = document.createElement('p');
p.innerHTML="Hello!!";
wrapper.append(p);

const one = document.querySelector('#one');
const p2 = document.createElement('p');
p2.innerHTML="Hello!!";
one.append(p2);








console.log();
console.log(one);
console.log(wrapper);
console.log(muscleMemory);
console.log(citiesList);
console.log(cities);
console.log(garden);
console.log(container);
console.log(park);


function addExercisesToContainer(array) {
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

addExercisesToContainer(exercises);