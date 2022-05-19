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

const container = document.querySelector('.container');
const one = document.getElementById('one');
const oneid = document.getElementById('#one');
const title = document.querySelector('h1');

console.log(container);

// Grab element park
const park = document.querySelector('.park');
const parkheader = park.children[0];
console.log(parkheader)

// Grab element garden
const pic = document.querySelector('.garden')

// Grab cities
const cities = document.querySelector('.cities');

// Select all the li on the page
const citiesList = document.querySelectorAll('li')
console.log(citiesList);

// grab h1 by class and index
const muscleMem = container.children[0];
console.log(muscleMem);



// Select the class wrapper
const wrapper = document.querySelector('.wrapper');
// Create a paragraph
const paragraphOne = document.createElement('p'); // <p></p>
// Add some text to the paragraph
paragraphOne.textContent = 'Hello!' // <p>Hello!!!</p>
// append the paragraph to the class wrapper
wrapper.appendChild(paragraphOne);

// Select the id one
const grabOne = document.querySelector('#one');
// Create a paragraph element
const p1 = document.createElement('p');
// add some text to the paragraph element
p1.textContent = "This is a test";
// Append paragraph to id one
grabOne.appendChild(p1);




function addExercisesToContainer(array) {
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // set each element to a variable
        let exerciseVariable = array[i].exercise; //sit ups, etc
        // create a new element
        let newElement = document.createElement('p');

        newElement.textContent = exerciseVariable;
        container.appendChild(newElement);
    }

    array.forEach(function(e) {
        let exercise = e.exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exercise;
        container.appendChild(newElement);
    });

    // create a new element
    // access "exercise" key to get value
    // add value text to element (textContent)
    // append new element to container
}

addExercisesToContainer(exercises); // Run the function and pass in Exercise

// Grab li inside of ul
const list = document.querySelector('.cities')
const ul = list.children[0];
const losAngeles = ul.children[0];
// append something to ul
const ny = ul.children[1];
ny.textContent = "Boston";


// ARROW FUNCTION
const evenCaps = (sentence) => {
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
        } else {
        newSentence += char;
        }
    }

  return newSentence;
}

























// DOM elements

// DOM Events

// DOM Manipulation