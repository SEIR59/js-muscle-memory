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

// //TALK THROUGH
// function addExercisesToContainer(array) {
//   // iterate through the array
//   for (let i = 0; i < array.length; i++) {
//     // set each element to a variable
//     let exerciseVariable = array[i].exercise;
//     // create a new element which is p
//     let newElement = document.createElement("p");
//     newElement.textContent = exerciseVariable;
//     container.appendChild(newElement);
//   }

//   // create a new element
//   // access "exercise" key to get value
//   // add value text to element (textContent)
//   // append new element to container

//   // FOREACH VERSION
//   //   array.forEach(function(e) {
//   //       let exercise = e.exercise;
//   //       let newElement = document.createElement('p')
//   //       newElement.textContent = exercise
//   //       container.appendChild(newElement)
//   //   })
// }
// const container = document.querySelector(".container");
// addExercisesToContainer(exercises);
// //END TALK THROUGH

// const muscMem = container.children[0];
// const title = document.querySelector("h1");

// const park = document.querySelector(".park");
// const parkHeader = park.children[0];
// console.log(parkHeader);
// const garden = document.querySelector(".garden");
// const cities = document.querySelector(".cities");
// // HOW TO GET TO A CITY WITHIN THE DIV
// const ul = cities.children[0];
// const losAngeles = ul.children[0];
// // UPDATE CITY
// const ny = ul.children[1];
// ny.textContent = "Boston";

// const citiesList = document.querySelectorAll("li");

// console.log(cities);

// const wrapper = document.querySelector(".wrapper");
// const paragraphOne = document.createElement("p");
// paragraphOne.textContent = "Hello";
// wrapper.appendChild(paragraphOne);

// const one = document.querySelector("#one");
// const paragraphTwo = document.createElement("p");
// paragraphTwo.textContent = "Hello again.";
// one.appendChild(paragraphTwo);

function sayHello(name) {
  let msg = "hello, " + name + ". How are you?";
  return msg;
}
console.log(sayHello("Earl"));

function sayHello(name) {
  return "hello, " + name + ". how are you?";
}
console.log(sayHello("bootcamp prep"));

function sayHello(name) {
  return `Hello ${name}! Welcome to your website!`;
}
console.log(sayHello());

function checkNumber(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(checkNumber(-3));

function fizzBuzz1(max) {
  for (i = 0; i <= max; i += 1)
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
}
fizzBuzz1(30);

function evenCaps(sentence) {
  let newSentence = "";

  for (i = 0; i < sentence.length; i++) {
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

evenCaps("HeLlo ThiS iS aLL EvEn");
