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

function adults(people) {
  // set up empty array to place names of people over the age of 17.
  let arrAdults = [];
  // iterate through the array and select the age element for each person. If it's 18 or more push them to the adults array.
  people.forEach(element => {
    if (element.age >= 18) {
      arrAdults.push(element.name);
    }
  });
  return arrAdults
}

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

console.log(adults(ppl)); 