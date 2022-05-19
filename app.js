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


// const container = document.querySelector('.container');

// //const muscleMemory = container.querySelector('h1');
// //console.log(muscleMemory);

// //grabs children of container at index 0 which is the h1
// const muscleMemory = container.children[0];
// console.log(muscleMemory);



// //const one = document.getElementById('one');
// //const one = document.querySelector('#one');

// const title = document.querySelector('h1'); //finds first h1 on page and selects that
// console.log(container);

// //grab element park
// const park = document.querySelector('.park');
// const parkHeader = park.children[0];
// console.log(parkHeader);

// //grab element garden
// const garden = document.querySelector('.garden');

// //cities
// const cities = document.querySelector('.cities');

// //all li's on page
// const citiesList = document.querySelectorAll('li');
// console.log(citiesList);

// //selecting wrapper class
// const wrapper = document.querySelector('.wrapper');
// //create a paragraph tag
// const paragraphOne = document.createElement('p');
// //add some text to the paragrapg tag
// paragraphOne.textContent = 'Hello!!';
// //append the paragraph to the class wrapper
// wrapper.appendChild(paragraphOne)


// //select id one
// //const one = document.getElementById('one');
// //this way might be better
// const oneDiv = document.querySelector('#one');
// //create paragraph element
// const oneP = document.createElement('p');
// //add some text to the paragraph element
// oneP.textContent = 'This is another paragraph in id one'
// //append the paragraph to id one
// oneDiv.appendChild(oneP);

// //stay away from innertext, use textContent


// function addExercisesToContainer(array) {
//     // iterate through the array
//     for (let i = 0; i < array.length; i++) {
//         // set each element to a variable
//         // access "exercise" key to get value
//         let exerciseVariable = array[i].exercise;
//         // create a new element
//         let newElement = document.createElement('p');
//         // add value text to element (textContent)
//         newElement.textContent = exerciseVariable;
//          // append new element to container
//         container.appendChild(newElement);
//     }
// }

// //run function and passing exercises array
// addExercisesToContainer(exercises);


// /*
// // using forEach
// function addExercisesToContainer(array) {
//     array.forEach(function(e) {
//         let exercise = e.exercise;
//         let newElement = document.createElement('p');
//         newElement.textContent = exercise;
//         container.appendChild(newElement);
//     });
// }

// addExercisesToContainer(exercises); // run the function
// */

// const list = document.querySelector('.cities');
// const ul = list.children[0];
// const losAngeles = ul.children[0];
// const ny = ul.children[1];
// ny.textContent = 'Boston';

// // ARROW FUNCTION
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


//classes

class Player {
    //constructor -> how we construct our class to be an object
    constructor(name, age, college) {
        this.name = name;
        this.age = age;
        this.college = college;
    }

    //methods (functions)
    intro() {
        return `Hello, my name is ${this.name}`;
    }

    run() {
        return `Run!`
    }

}

const playerOne = new Player('John', 19, 'UCLA'); //constructor a player object
const playerTwo = new Player('Sam', 20, 'Stanford');

class InstagramUser {
    constructor(email, username) {
        this.email = email;
        this.userName = username;
        this.admin = false;
        this.name = 'User';
    }

    methonOne() {

    }

    methodTwo() {

    }
}

class Authors {
    constructor(fName, lName, book) {
        this.name = name;
        this.book = book;
    }

    authorName() {
        return `Author ${this.name}`
    }

}

const rickRiordan = new Authors('Rick', 'Riordan', 'Percy Jackson');

const johnSmith = new InstagramUser('john@gmail.com', 'johnsmith'); //we can do more with this than using a regular array or object
console.log(johnSmith.name);
johnSmith.admin = true;

const array = [
    {
        email: 'jon@gmail.com',
        username: 'johnsmith'
    }
]

function setup(name, age, college) {
    const newPlayer = new Player(name, age, college);

    return newPlayer;
}

setup('Sammy', 18, 'UK');
const result = setup('Sammy', 18, 'UK')
const result2 = setup('')
// result.name;
// result.age;
// result.college;


//select element
const element = document.querySelector('#playerOne') 
//<p id="playerOne">John</p>