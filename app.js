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

//select the class wrapper
const wrapper = document.querySelector('.wrapper')
// create a paragraph 
const paragraphOne = document.createElement('p')
// add some text to the paragraph 
paragraphOne.textContent = 'Hello'
// append the paragraph to the class wrapper
wrapper.appendChild(paragraphOne)

// select the id one
const grabId = document.querySelector('#one');
// create a paragraph element
const makeParagraph = document.createElement('p');
// add some text to the paragraph element
makeParagraph.textContent = 'Get it Gurl!'
// append the paragraph to the id one
grabId.appendChild(makeParagraph)
console.log(grabId)


const container = document.querySelector('.container');
const title = document.querySelector('h1');


//grab element park
const park = document.querySelector('.park')
//select an element inside of the div class
const parkheader = park.children[0]

//grab element garden 

const garden = document.querySelector('.garden')

// grab class cities

const cities = document.querySelector('.cities')

//select all of the li's in the html document 


const citieslist = document.querySelectorAll('li')

// select muscle memory tag with a child tag

const muscleMemory =  container.children[0]

console.log(muscleMemory);







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

addExercisesToContainer(exercises); // run the function
// DOM elements

// DOM Events

// DOM Manipulation 