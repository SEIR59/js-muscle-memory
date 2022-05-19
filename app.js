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

// const container = document.querySelector('.container')
// const title = document.querySelector('h1')

// console.log(container)

// // grab element park
// const park = document.querySelector('.park')

// // grab element garden
// const garden = document.querySelector('.garden')

// // grab element cities
// const cities = document.querySelector('.cities')

// // selecting all li on the page
// const citiesList = document.querySelectorAll('li')

// // select
// const muscleMemory = container.children[0]

// // select park header
// const parkHeader = park.children[0]
// const wrapper = document.querySelector('.wrapper')

// // create a paragraph tag and apppend the tag to the class wrapper
// const newP = document.createElement('p')
// newP.innerText = 'Hello'
// wrapper.append(newP)

// // select the id one
// const one = document.querySelector('#one')
// // create a paragraph element
// const oneP = document.createElement('p')
// // add some text to the paragraph element
// oneP.innerText = 'Some text'
// // append the paragraph to the id one
// one.append(oneP)

// function addExercisesToContainer(array) {
//     // iterate through the array
//     for (let i = 0; i < array.length; i++) {
//         // set each element to a variable
//         let exerciseVariable = array[i].exercise;
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

// DOM elements

// DOM Events

// DOM Manipulation

// class Player {
//     constructor(name, age, college) {
//         this.name = name
//         this.age = age
//         this.college = college
//     } 
//     // methods (functions)
//     intro() {
//         return `Hello, my name is ${this.name}`
//     }

//     run() {
//         return `Run!`
//     }

// }

// const playerOne = new Player('Victor', 25, 'Harvard') // constructing a player object
// const playerTwo = new Player('Sam', 20, 'Stanford')

// class InstagramUser {
//     constructor(email, username) {
//         this.email = email
//         this.username = username
//     }

//     methodOne(){

//     }

//     methodTwo(){

//     }
// }

// const johnSmith = new InstagramUser('john@gmail.com', 'johnsmith')

// const users = [
//     {email: 'john@gmail,com', username: 'johnsmith'}
// ]

class Sports {
    constructor(sport, playerAmount, teamSport){
        this.sport = sport
        this.playerAmount = playerAmount
        this.teamSport = teamSport
    }
    yellSports(){
        console.log(`We're playing ${this.sport}. We need ${this.playerAmount} to play`)
    }
    isThisTeam(){
        if (this.teamSport) console.log('We need to make teams')
        else console.log('Pair up and play')
    }
}

const volleyball = new Sports('volleyball', 6, true)
volleyball.isThisTeam()
volleyball.yellSports()
