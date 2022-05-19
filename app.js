// Practice

// DOM elements

// DOM Events

// DOM Manipulation


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

// console.log(container)
// console.log(title)


// const park = document.querySelector('.park')

// const garden = document.querySelector('.garden')

// const cities = document.querySelector('.cities')

// const citiesList = cities.querySelectorAll('li')

// console.log(citiesList)

// const muscleMemory = container.children
// console.log(muscleMemory)

// const parkheader = park.children[0]

// console.log(parkheader)

// const wrapper = document.querySelector('.wrapper')
// const paragraphOne = document.createElement('p')
// paragraphOne.textContent = 'hello'
// wrapper.appendChild(paragraphOne)

// const one = document.querySelector('#one')
// const paragraphTwo = document.createElement('p')
// paragraphTwo.textContent = 'world'
// one.append(paragraphTwo)


// function addExercisesToContainer(e) {
//     // iterate through the array
//     // for (let i = 0; i < array.length; i++) {
//     //     // set each element to a variable
//     //     let exerciseVariable = array[i].exercise;
//     //     let newElement = document.createElement('p');
//     //     newElement.textContent = exerciseVariable;
//     //     container.appendChild(newElement);
//     // }
//     array.forEach(() => {
        
//     });
//     // create a new element
//     // access "exercise" key to get value
//     // add value text to element (textContent)
//     // append new element to container
// }

// addExercisesToContainer(exercises);


// const sayHello = (name) => {
//     let msg = `Hello , ${name}. How are you?`
//     return msg
// }
// console.log(sayHello('bootcamp prep'))

// const sayHello = (name) => {
//     let msg = `Hello ${name}. How are you?`
//     return msg
// }
// console.log(sayHello('bootcamp prep'))

// const sayHello = (name) => {
//     let msg = `Hello ${name}. How are you?`
//     return msg
// }
// console.log(sayHello('bootcamp prep'))

// const sayHello = (name) => {
//     let msg =`Hello ${name}. How are you?`
//     return msg
// }
// console.log(sayHello('bootcamp prep'))

// const sayHello = (name) => {
//     let msg = `Hello ${name}.`
//     return msg
// }
// console.log(sayHello('bootcamp prep'))


class Player{
    constructor(name,age,college){
        this.name = name,
        this.college = college,
        this.age = age
    }
    intro() {
        return `Hello my name is ${this.name}`
    }
    run() {
        return "Run"
    }
}

const playerOne = new Player('John', 19, "UCLA")
const playerTwo = new Player("Sam", 20, 'Stanford')

class InstagramUser {
    constructor(email,username){
    this.username = username
    this.email = email
    }
}

const johnSmith = new InstagramUser('john@gmail.com', 'johnsmith')

const array = [
    {email: 'john@gmail.com', username: 'johnsmith'}
]



class Cars{
    constructor(make, model, year){
        this.make = make,
        this.year = year,
        this.model = model
    }
}
const supra = new Cars('Toyota', 'Supra', 2021)
console.log(supra)

