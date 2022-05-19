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
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];


 //probably use .filter
 function adults (tuna){
    const oldPeople = tuna.filter(function(word) {
      if (word.age > 18){
        return true
      } else {
        return false
      }
    })
  return oldPeople;
  };
   
console.log(adults(ppl)); // => [ 'Khalid Robinson', 'Post Malone' ]

//need if else to filter out those who are younger that 18