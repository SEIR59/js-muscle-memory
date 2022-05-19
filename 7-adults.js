/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

function TAKES IN ARRAY of PERSON OBJECTS.
Make a loop that adds specs to new array.
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
  let legal = [];
  people.forEach(element => {
    if (element.age >= 18) {
      legal.push(element.name);
    }
  })
}

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];
console.log(adults(ppl));