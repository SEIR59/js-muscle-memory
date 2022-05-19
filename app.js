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

// const container = document.querySelector(".container");
// const firsth1=container.children[0]
// console.log(firsth1)
// const title =document.querySelector("h1");
// console.log(container)

// let park =document.querySelector(".park")
// let parkh1 =park.children[0]
// //or we can do this way
// let parkh11=park.querySelector("h1")
// console.log(parkh11)

// console.log(parkh1)
// let garden =document.querySelector(".garden")

// let cities =document.querySelector(".cities")
// let citiesList =document.querySelector("li")
// console.log(citiesList)

// // select wrapper
// const wrapper=document.querySelector(".wrapper")
// //create p tag add text and append it to class wrapper

// const paragraph1 =document.createElement("p")
// paragraph1.textContent="Hello!!"
// wrapper.appendChild(paragraph1)



// //select the id one and create a p element add some text to p
// //append the p to the id one

// const divid =document.querySelector("#one")
// const newp = document.createElement("p")
// newp.textContent="new paragraph"
// divid.appendChild(newp)
// /////////////////////////////////////////////////////////////////////////////

// function addExercisesToContainer(array) {
//     // iterate through the array
//     for (let i = 0; i < array.length; i++) { 
//         // set each element to a variable
//         let exerciseVariable = array[i].exercise;
//         // create a new element
//         let newElement = document.createElement('p');
//         newElement.textContent = exerciseVariable;
//         container.appendChild(newElement);
//     }
   
// }
// addExercisesToContainer(exercises);

//  ////or we can do this way using for each
// //    // using forEach
// // function addExercisesToContainer(array) {
// //     array.forEach(function(e) {
// //         let exercise = e.exercise;
// //         let newElement = document.createElement('p');
// //         newElement.textContent = exercise;
// //         container.appendChild(newElement);
// //     });
// // }

// // addExercisesToContainer(exercises); // run the function
    
//     // access "exercise" key to get value
//     // add value text to element (textContent)
//     // append new element to container


//     // const list =document.querySelector(".cities")
//     // const ul = list.children[0]
//     // const losangeles=ul.childeren[0]
//     //to grab the li from div of class"cities


// /////////////////////////
//     // const yoni=()=>{
//     //     //arrow function
//     // }



//     //////functions task five



//     function yoni(name){
// let msg = `yoni${name} is the dope one`
// return msg
//     }
//   console.log(yoni(dopes))



//   class Player{
//       constructor(name,age,collage){
//         this.name=name;
//         this.age=age;
//         this.collage=collage;

//       }

//       ///methods (function)
//       intro(){
//           return `hello my name is ${this.name}`
//       }
//       run(){
//           return `run!`
//       }

//   }

//   const playerOne = new Player("yoni",19,"ucla")///build a constructor object
//   const playertwo = new Player("sam",20,"gw")

//   playerOne.intro()


//   class InstagramUser {
//       constructor(name,username)
//       this.name=name;
//       this.username=username;
//       this.admin=false;


      
//   }


//   const yoni= new InstagramUser("YONI","GUITARISTYONA","admin?")




//   class Students {
//        constructor(name,age,major){
//            this.name=name;
//            this.age=age;
//            this.major=major
//        }

//     one(){
//        return  `this student is majoring in ${this.major}`
//     }
//     two(){
//     return `this student age is ${this.age}`
//     }
//   }


//   const stu1 = new Students("Yonatan",22,"CS")