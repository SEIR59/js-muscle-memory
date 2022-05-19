// // Practice
// const exercises = [
//     {
//         exercise: 'dumbbell curls🏋🏽',
//         bodyType: 'biceps',
//         bodyPart: 'arms'
//     },
//     {
//         exercise: 'running 🏃🏽‍♂️',
//         bodyPart: 'legs'
//     },
//     {
//         exercise: 'sit ups 🤸🏽‍♀️',
//         bodyType: 'abs ',
//         bodyPart: 'core'
//     }
// ];

// const container = document.querySelector('.container');
// const one = document.querySelector('.one')

// const title = document.querySelector('h1')

// const pick = document.querySelector('.park')

// const cities = document.querySelector('.cities')

// const citiesList = document.querySelectorAll('li')
// // here we are grabbing it by the "TAG" the TAG = "li"


// //this is how you get a item from the html 
// // the query selector will "look/query" the page for the element you specify
// //you can specify ID by using the # and class by using the .
// //the thing that follows const or let i.e. "const xxxx" xxxx= variable

// //const muslceMemory = document.querySelector('.container')
// const muslceMemory = container.children[0];
// //This is how you gte the child of an element you select
// //Div Class name = element, child = each of the cascading things in the element

// //onst parkHeader - parkHeader.children[0]



// // DOM elements

// const wrapper = document.querySelector('.wrapper')
// //create a paragraph tag
// const paragraph1 = document.createElement('p')
// //this is how you create an element 

// paragraph1.textContent = 'HelloI'
// // this is how you create text for the tag you want to enter it into
// //so the above translates to <p>HelloI</p>
// //add some text to the paragraph

// wrapper.appendChild(paragraph1)
// //append the paragraph to the class

// // DOM Events

// // DOM Manipulation

// // select the id one
// const selectingOne = document.querySelector('#one')
// const oneParagraph = document.createElement('p')
// oneParagraph.textContent = 'Thi is how you add that text';

// selectingOne.appendChild(oneParagraph)

// console.log(selectingOne)
// // create a paragraph element
// // add some text to the paragraph element
// // append the paragraph to the id one


// function addExercisesToContainer(array) {
//     // iterate through the array
//     for (let i = 0; i < array.length; i++) {
//         // set each element to a variable
//         let exerciseVariable = array[i].exercise;

//         //then we create a new element
//         let newElement = document.createElement('p');
//         newElement.textContent = exerciseVariable;
//         container.appendChild(newElement);
//     }
    
//     // create a new element
//     // access "exercise" key to get value
//     // add value text to element (textContent)
//     // append new element to container
// }

// addExercisesToContainer(exercises);

// function seyHello(name) {
//     let msg = 'Hello, ' + name + '. how are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function writingFunctions(argumentBeingPassed) {
//     let argumentBeingPassed = 'whats up' + word + 'dude '
// }

// function sayWhatsUp(argument) {
//     return `${argument}`
// }

// console.log(sayWhatsUp("My name is tiras"))

function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else {
        return 'greater than 0'
    }
}
//checking for number thats greater than 0
//console.log(checkNumber(0));

function lookForBigNumber(number) {
    if (number > 50) {
        return "This is bigger than 50"
    } else {
        return "This is less than"
    }
}
console.log(lookForBigNumber(100));

function fizzBuzz1(max) {
    for (let i = 0; i <= max; i++) {
        console.log(i)
    }
}
fizzBuzz1(10)


