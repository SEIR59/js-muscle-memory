// Practice
const exercises = [
  {
    exercise: "dumbbell curls🏋🏽",
    bodyType: "biceps",
    bodyPart: "arms",
  },
  {
    exercise: "running 🏃🏽‍♂️",
    bodyPart: "legs",
  },
  {
    exercise: "sit ups 🤸🏽‍♀️",
    bodyType: "abs ",
    bodyPart: "core",
  },
];
// DOM elements
const container = document.querySelector(".container");
// console.log(container);

const park = document.querySelector(".park");
const cities = document.querySelector(".cities");
const citiesList = document.querySelectorAll(".cities li");
// console.log(citiesList);

const muscle = container.children;
console.log(muscle); ///HTML collection

const muscleH1 = container.querySelector("h1");
console.log(muscleH1); ///same as children[0],

const muscleChildern = container.children[0];
console.log(muscleChildern); ///h1 - HTMLHeadingElement

const muscleNode = container.childNodes;
console.log(muscleNode); ///NodeList

const wrapper = document.querySelector(".wrapper");
//create a paragraph
const p1 = document.createElement("p");
p1.textContent = "This is p1 textContent.";
p1.innerText = "This is p1 innerText - will this replace textContent? -yes";
p1.innerHTML = "This is p1 innerHTML - it replaces everything";
p1.innerHTML += "This is p1 innerHTML - now it won't replaces previous content";
p1.textContent = "how about now - textContent - replace everything";
p1.innerText = "how about now - innerText - replace everything";
wrapper.appendChild(p1);

///appendChild by existing elements from the html
wrapper.appendChild(park); //park is removed to the wrapper

///if I just want to copy ... node clone

///add exercise in exericses into container
