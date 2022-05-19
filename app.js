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
const container = document.querySelector(".container");
const title = document.querySelector("h1");

console.log(container);

const park = document.querySelector(".park");

const garden = document.querySelector(".garden");

const cities = document.querySelector(".cities");

const citiesList = document.querySelectorAll("li");

const muscleMemory = container.children[0];

// YOU HAVE TO PULL PARK BEFORE YOU'RE ABLE TO GRAB CHILD ELEMENT
const parkHeader = park.children[0];
console.log(parkHeader);

// SELECT THE CLASS WRAPPER
const wrapper = document.querySelector(".wrapper");
// create a paragraph
const paragraphOne = document.createElement("p"); //<p></p>
//add some text to the p tag
paragraphOne.textContent = "Hello!"; // <p>Hello!</p>
//append the paragraph
wrapper.appendChild(paragraphOne);

// select the id one
// create a paragraph element
// add some text to the paragraph element
// append the paragraph to the id one

const divOne = document.querySelector("#one");
const paragraphUno = document.createElement("p");
paragraphUno.textContent = "First paragraph";
one.append(paragraphUno);



////// NEW EXERCISE


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




// DOM elements

// DOM Events

// DOM Manipulation