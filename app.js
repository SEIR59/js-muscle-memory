// // Practice

// // DOM elements

// // DOM Events

// // DOM Manipulation


// const container = document.querySelector('.container')
// console.log(container)
// const containerH1 = container.children[0]
// console.log(containerH1)
// containerH1.innerText = 'YEEHAW!'



// const one = document.getElementById('one')

// const park = document.querySelector('.park')

// // park.innerHTML = '<h1>HELLO</h1>'
// const parkH1 = park.children[0]
// parkH1.innerText = "Changed this through the DOM, baby!!"

// console.log(park)
// console.log(parkH1)

// const cities =  document.querySelectorAll('li')
// console.log(cities)


// const wrapper = document.querySelector('.wrapper')
// const p = document.createElement('p')
// p.innerText = 'Best wrapper alive'
// wrapper.append(p)

// let divOne = document.getElementById('one')
// let divOneParagraph = document.createElement('p')
// divOneParagraph.innerText = 'Best wrapper alive'
// divOne.append(divOneParagraph)




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

// function addExercisesToContainer(array) {
//     // iterate through the array
//     // for (let i = 0; i < array.length; i++) {
//     //     // set each element to a variable
//     //     let exerciseVariable = array[i].exercise;
//     //     let bodyPart = array[i].bodyPart
//     //     let newElement = document.createElement('p');
//     //     newElement.style.backgroundColor = 'blue'
//     //     newElement.style.color = 'yellow'
//     //     newElement.style.display = 'flex'
//     //     newElement.textContent = `${exerciseVariable} targets: ${bodyPart}` 
//     //     container.appendChild(newElement);
//     array.forEach(element => {
//         let exercise = element.exercise
//         let newElement = document.createElement('p')
//         newElement.textContent = exercise
//         container.append(newElement)
//     });
//     }
    
//     // create a new element
//     // access "exercise" key to get value
//     // add value text to element (textContent)
//     // append new element to container


// addExercisesToContainer(exercises);

// class Player {
//     constructor(name, age, college){
//         this.name = name
//         this.age = age
//         this.college = college
//     }

//     //methods (functions)
//     intro() {
//         return `Hello, my name is ${this.name}`
//     }
//     run() {
//         return 'Run!'
//     }
// }
// const playerOne = new Player('Mark', 36, 'WVU')
// console.log(playerOne)  

// class InstagramUser {
//     constructor(userName){
//         this.name = `User Name: `+ userName
//         this.email = userName + '@gmail.com'
//         this.userName = userName

//     }
//     makeCaps(userName){
//         return this.userName.toUpperCase()
//     }
// }
// const johnSmith = new InstagramUser('johnsmith')
// console.log(johnSmith)


// // below is the bad way to do it instead of making instance of a class
// // const array = [
// //     {email: 'john@gmail.com', username:'johnsmith'}
// // ]
// console.log(johnSmith.makeCaps())

// class RockClimb {
//     constructor(climbName, grade, numberOfAscents){
//         this.name = climbName
//         this.grade = grade
//         this.numberOfAscents = numberOfAscents
//     }
// }
// const Hellcat = new RockClimb('Hellcat', '5.14a', 40)
// console.log(Hellcat)
