// // Practice

// // DOM elements

// // DOM Events

// // DOM Manipulation
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
// const container = document.querySelector('.container')
// const title = document.querySelector('h1')
// const garden = document.querySelector('.garden')
// const citiesList = document.querySelectorAll('li')
// const muscleMemory = container.children[0]

// const wrapper = document.querySelector('.wrapper')
// // create a paragraph
// const paragraph = document.createElement('p')
// //add some text to the paragraph tag
// paragraph.textContent = 'Hello!'
// //append the paragraph to the class wrapper
// wrapper.appendChild(paragraph)
// console.log(wrapper)

// // select the id one
// // create a paragraph element
// // add some text to the paragraph element
// // append the paragraph to the id one
// const idOne = document.getElementById('one')
// const para = document.createElement('p')
// para.textContent = 'differences'
// idOne.appendChild(para)
// console.log(idOne)

// function addExercisesToContainer(array) {
//     // iterate through the array
//     for (let i = 0; i < array.length; i++) {
//         // set each element to a variable
//         let exerciseVariable = array[i].exercise;
//         let newElement = document.createElement('p');
//         newElement.textContent = exerciseVariable;
//         container.appendChild(newElement);
//     }
//     array.forEach(function(e) {
//         let exercise = e.exercise
//         let newElement = document.createElement('p')
//         newElement.textContent = exercise
//         container.appendChild(newElement)
//     })
    
//     // create a new element
//     // access "exercise" key to get value
//     // add value text to element (textContent)
//     // append new element to container
// }

// addExercisesToContainer(exercises);

// function sayHello(name) {
//     // let msg = 'Hello, ' + name + '. How are you?';
//     // return msg;
//     return `Hello ${name}. How are you?`
//   }
//   console.log(sayHello('bootcamp prep')); 

// function checkNumber(num) {
//     if (num > 0) {
//         return `${num} is a positive number`
//     } else if (num < 0) {
//         return "'negative'"
//     } else {
//         return 'zero'
//     }
// }
// console.log(checkNumber(-3))

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }
  console.log(fizzBuzz1(6))