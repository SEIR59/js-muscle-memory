// Practice
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

const container = document.querySelector('.container')
const title = document.querySelector('h1')
const muscleMemory = container.querySelector("h1")
// or
//const muscleMemory = container.children[0]
console.log(muscleMemory.innerText)

// console.log(container)

const park = document.querySelector(".park")
const gardden = document.querySelector(".garden")
const cities = document.querySelector(".cities")

const citiesList = cities.querySelectorAll("li")

const wrapper = document.querySelector(".wrapper")

const paragraph = document.createElement("p")
paragraph.innerText = "This is inside my new paragraph tag I believe!"
wrapper.appendChild(paragraph)
paragraph.innerText = paragraph.innerText.toUpperCase();


const one = document.getElementById("one")
const p2 = document.createElement("p")
one.appendChild(p2)
p2.innerText = "You the one ayyyyyy, ooooohhhhhoooo - Jbiebs"

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



// console.log(citiesList[0].innerHTML)


// DOM elements

// DOM Events

// DOM Manipulation