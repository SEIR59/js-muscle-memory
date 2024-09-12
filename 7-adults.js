/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

adults(ppl); // => [ 'Khalid Robinson', 'Post Malone' ]
***********************************************************************/

const ppl = [
  { name: "Khalid Robinson", age: 22 },
  { name: "Ariel Winter", age: 20 },
  { name: "Post Malone", age: 25 },
  { name: "Willow Smith", age: 17 },
];

function adults(person) {
  return person.age > 18;
}

const over18 = ppl.filter(adults);
console.log(over18);

// // (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

// const isCool = function (person) {
//   return person.coolnessScore > 20;
// };

// // Your code goes here
// const coolPeople = people.filter(isCool);
// console.log(coolPeople);
