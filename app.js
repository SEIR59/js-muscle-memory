// // Practice

// // const exercises = [
// //     {
// //         exercise: 'dumbbell curls🏋🏽',
// //         bodyType: 'biceps',
// //         bodyPart: 'arms'
// //     },
// //     {
// //         exercise: 'running 🏃🏽‍♂️',
// //         bodyPart: 'legs'
// //     },
// //     {
// //         exercise: 'sit ups 🤸🏽‍♀️',
// //         bodyType: 'abs ',
// //         bodyPart: 'core'
// //     }
// // ];

// //searching the document, then selecting what you want to grab
// //can select a tag, id, or class

// //same way to grab the same thing
// // const one = document.querySelector('#one')
// // const one = document.getElementById('one');
// const container = document.querySelector(".container");
// const title = document.querySelector("h1");

// console.log(container);
// //getElementsByClassName grabs all elements with that class name. if only needing 1 element, then use queryselector
// const park = document.querySelector(".park");
// const garden = document.querySelector(".garden");
// const cities = document.querySelector(".cities");

// //want to select all ul
// //this is an example of a tag - grabbing a tag
// const cityList = document.querySelectorAll("li");
// //trying to grab the container that the h1 is in
// //trying to grab the child from the parent
// const muscleMemory = container.children[0];
// //the first index of the container is the h1
// const park = document.querySelector(".park");
// // have to grab the parent before you can grab any children elements from it
// const parkHeader = park.children[0];

// //select the class wrapper
// const wrapper = document.querySelector(".wrapper");
// //create a paragraph (<p>) tag and append the paragraph tag to the class wrapper
// const paragraphOne = document.createElement("p"); //<p></p>
// //now add some text
// paragraphOne.textContent = "Hello and good morning"; //<p>"Hello and good morning"</p> - not on HTML yet
// //append the paragraph to the class wrapper
// wrapper.appendChild(paragraphOne);
// //now you can change the text you just created - like make it all uppercase
// paragraph.innerText = paragraph.innerText.toUpperCase();

// // select the id one
// const oneDiv = document.querySelector("#one");
// // create a paragraph element
// const paragraphTwo = document.createElement("p");
// // add some text to the paragraph element
// paragraphTwo.textContent = "Super cool!";
// // append the paragraph to the id one
// oneDiv.appendChild(paragraphTwo);

// const exercises = [
//   {
//     exercise: "dumbbell curls🏋🏽",
//     bodyType: "biceps",
//     bodyPart: "arms",
//   },
//   {
//     exercise: "running 🏃🏽‍♂️",
//     bodyPart: "legs",
//   },
//   {
//     exercise: "sit ups 🤸🏽‍♀️",
//     bodyType: "abs ",
//     bodyPart: "core",
//   },
// ];

// function addExercisesToContainer(array) {
//   // iterate through the array
//   for (let i = 0; i < array.length; i++) {
//     // set each element to a variable
//     let exerciseVariable = array[i].exercise;
//     //array
//     let newElement = document.createElement("p");
//     newElement.textContent = exerciseVariable;
//     container.appendChild(newElement);
//   }

//   // create a new element
//   // access "exercise" key to get value
//   // add value text to element (textContent)
//   // append new element to container
// }
// //this is how it connects to the array above
// addExercisesToContainer(exercises);

// const list = document.querySelector(".cities");
// const ul = list.children[0];
// //append something to ul
// const losAngeles = ul.children[0];
// const ny = ul.children[1];
// ny.textContent = "Boston";

// // using forEach
// function addExercisesToContainer(array) {
//   array.forEach(function (e) {
//     let exercise = e.exercise;
//     let newElement = document.createElement("p");
//     newElement.textContent = exercise;
//     container.appendChild(newElement);
//   });
// }

// addExercisesToContainer(exercises); // run the function

// ARROW FUNCTION
// const evenCaps = (sentence) => {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//         let capitalChar = char.toUpperCase();
//         newSentence += capitalChar;
//         } else {
//         newSentence += char;
//         }
//     }

//   return newSentence;
// }


// // DOM elements

// // DOM Events

// // DOM Manipulation

// //TASK 5 - Function Muscle Memory
// //type each out 10 times and always make sure to return the function

// function sayHello(name){
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name){
//     let msg = 'Hello ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name){
//     let msg = 'Hello ' + name + '. How are you?';
//     return msg;
// }
// sayHello('bootcamp prep - where will this show up?');
// //
// function checkNumber(num) {
//     if (num < 0){
//         return 'negetive';
//     }else if (num > 0){
//         return 'positive';
//     }else {
//         return 'zero'
//     }
// }
// console.log(checkNumber(5));

// function checkNumber(number) {
//     if (number < 0){
//         return 'less than';
//     }else if (number > 0){
//         return 'greater than'
//     } else {
//         return 'zero'
//     }
// }
// console.log(checkNumber(10));

// function checkNumber(numbers) {
//     if (numbers < 5){
//         return 'tiny'
//     } else if (numbers > 5){
//         return 'large'
//     } else {
//         return 'zero'
//     }
// }
// console.log(checkNumber(2))

// //
// function fizzBuzz1(max){
//     for (let i=0; i< max; i++){
//         if (i %3 === 0 && i %5 !== 0){
//             // console.log(i)
//         }else if (i %5 ===0 && i %3 !== 0){
//             // console.log(i);
//         }
//     }
// }
// // console.log(fizzBuzz1(15));

// function fizzBuzz1(max){
//     for (let i=0; i<max; i++){
//         if (i%3 === 0 && i%5 !== 0){
//             console.log(i)
//         }else if (i %5 === 0 && i%3 !== 0){
//             console.log(i);
//         }
//     }
// }
// // console.log(fizzBuzz1(50));

// function fizzBuzz1(numberssss){
//     for (let i=0; i< numberssss; i++){
//         if (i%3 === 0 && i%5 !== 0){
//             console.log(i);
//     }else if (i%5 ===0 && i%3 !== 0){
//             console.log(i);
//     }
// }
// console.log(fizzBuzz1(50));


//
function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence = newSentence + capitalChar;
    } else {
      newSentence += char;
    }
  }
  return newSentence;
}
console.log(evenCaps("my name is katy"));

function oddCaps(sentence1) {
    let newSentence = '';

    for (let i = 0; i < sentence1.length; i++){
        let characters = sentence1[i];
        if (i % 2 !==0) {
            let capitalCharacters = characters.toUpperCase();
            newSentence = newSentence + capitalCharacters;
        }else {
            newSentence += characters
        }
    }
return newSentence
}
console.log(oddCaps("my name is katy"))

