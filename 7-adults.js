/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

*/const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

console.log(adults(ppl)); // => [ 'Khalid Robinson', 'Post Malone' ]


function adults(people) { 
  const oldPeople = people.filter(function(person){
    
    if (person.age >= 18) {
    return true;
    }else {
      return false;
    }
  }) 
return oldPeople;
  
}
