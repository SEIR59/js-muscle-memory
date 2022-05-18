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
// ];
// // Practice
// //grab container element from HTML
// const container = document.querySelector('.container');
// //grab the first child element (h1)
// const muscleMemory = container.children[0];

// const title = document.querySelector('h1');
// // console.log(container);

// //grab elements park and garden
// const park = document.querySelector('.park');
// const parkHeader = park.children[0];

// const garden = document.querySelector('.garden');

// //grab element city
// const cities = document.querySelector('.cities');

// //Select all li on page
// const citiesList = document.querySelectorAll('li');


// //select the class wrapper
// const wrapper = document.querySelector('.wrapper');
// //create a paragraph tag 
// const paragraphOne = document.createElement('p'); //<p></p>
// //add text to paragraph
// paragraphOne.textContent = 'Hello!!' //<p>Hello!!</p>
// //append p tag to wrapper
// wrapper.appendChild(paragraphOne);

// //select id one
// //create a paragraph element
// //add some text to p element
// //append to id one
// const one = document.querySelector('#one')
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'New Paragraph';
// one.appendChild(newParagraph);
// console.log(one);

// function addExercisesToContainer(array) {
//     // iterate through the array
//     // for (let i = 0; i < array.length; i++) {
//     //     // set each element to a variable
//     //     let exerciseVariable = array[i].exercise;
//     //     //create new element
//     //     let newElement = document.createElement('p');
        
//     //     newElement.textContent = exerciseVariable;
//     //     container.appendChild(newElement);
//     // }
    
// array.forEach(function(e){
//     let exercise = e.exercise;
//     let newElement = document.createElement('p');
//     newElement.textContent = exercise;
//     container.appendChild(newElement);
// })

// array.forEach((e) => {
//     let exercise = e.exercise;
//     let newElement = document.createElement('p');
//     newElement.textContent = exercise;
//     container.appendChild(newElement);
// })


//     // create a new element
//     // access "exercise" key to get value
//     // add value text to element (textContent)
//     // append new element to container
// }

// addExercisesToContainer(exercises);

Write each function 3 times
//1.
const sayHello = (name) => {
    let msg = `Hello, ${name}. How are you?`
    return msg;
}
console.log(sayHello('Taylor'));

const sayHello = (name) => {
    let msg = `Hello, ${name}. How are you?`
}
console.log(sayHello('Taylor'));

const sayHello = (name) => {
    let msg = `Hello, ${name}. How are you?`
}
console.log(sayHello('Taylor'));


//2.
const checkNumber = (num) => {
    if (num > 0) {
        return `positive`;
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(10));

const checkNumber = (num) => {
    if (num > 0){
        return 'positive';
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));

const checkNumber = (num) => {
    if (num > 0){
        return 'positive';
    } else if (num < 0) {
        return 'negative'
    }
}
console.log(checkNumber(2));

//3.
const fizzBuzz = (max) => {
    for(let i = 0; i < max; i++){
        if (i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}
fizzBuzz(10);

const fizzBuzz = (max) => {
    for (let i = 0; i < max; i++){
        if (i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

const fizzBuzz = (max) => {
    for (let i = 0; i < max; i++){
        if (i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        } else if (i % 5 === 0 %% i % 3 !== 0){
            console.log(i);
        }
    }
// }

//4.
function evenCaps(sentence){
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if (i % 2 === 0){
            let capitalChar = char.toUpperCase();
            newSentence += capitalChar;
        } else {
            newSentence += char;
        }
    }
    return newSentence;
}
console.log(evenCaps('This is a sentence'));

function evenCaps(sentence){
    let newSentence = ""
    
    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if (i % 2 === 0){
            let capitalChar = char.toUpperCase();
            newSentence += capitalChar;
        } else {
            newSentence += char;
        }
    }
    return newSentence;
}

function evenCaps(sentence){
    let newSentence = ""

    for (let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if (i % 2 === 0){
            let  capitalChar = char.toUpperCase();
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