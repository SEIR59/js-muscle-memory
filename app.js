const container = document.querySelector('.container');
const title = document.querySelector('h1');

// grab element park
const park = document.querySelector('.park');
console.log(park);

// grab element garden
const garden = document.querySelector('.garden');
console.log(garden);

// grab element cities
const cities = document.querySelector('.cities');
console.log(cities);

// selecting all the li on the page
const lis = document.querySelectorAll('li');
console.log(lis);

// select JS Muslce Memory by class
const muscleMemory = container.children[0];
console.log(muscleMemory);

console.log(container);


// select the class wrapper
const wrapper = document.querySelector('.wrapper');
// create a paragraph tag
const p1 = document.createElement('p');
p1.textContent = 'Hello!!';
// append the paragraph tag to the class wrapper
wrapper.appendChild(p1);

// select the id one
const one = document.querySelector('#one');
// create a paragraph element
const para = document.createElement('p');
// add some text to the paragraph element
para.textContent = 'There can be only one!';
// append the paragragh to the id one
one.appendChild(para);

////////////////////////////////////////////////////

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
};

addExercisesToContainer(exercises);

  ////////////////////////////////////////
 /////////     NEXT SECTION     /////////
////////////////////////////////////////

class Player {
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
        return 'Run';
    }
}

const player1 = new Player('Kenny', 27, 'McDaniel College');
console.log(player1.intro());

class GameCharacter {
    constructor(name, colorTheme, ability) {
        this.name = name;
        this.colorTheme = colorTheme;
        this.ability = ability;
    }

    pressA() {
        console.log(`${this.name} ${this.ability}ed!`);
    }
}

const mario = new GameCharacter('Mario', 'red', 'jump');
mario.pressA();