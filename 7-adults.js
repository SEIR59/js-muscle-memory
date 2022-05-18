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

//This **works**, but only return the objects of the people who are 18 and over. I want to try to return just the names
// function adults(people) {
//   const adultsArr = ppl.filter((person) => {
//     if (person.age >= 18){
//       return person
//     }
//   })
// }

//This ***works***, but still has an undefined El in the new array
// const adults = (people) => {
//   return adultsArr = ppl.map((person) => {
//     if (person.age >= 18){
//       return person.name
//     } else {
//       const index = ppl.indexOf(person)
//        ppl.splice(index, 1)
//     }
//   })
// }
const adults = (people) => {
  const adultsArr = []
  for (let i=0; i<people.length; i++){
    if (people[i].age >= 18){
      adultsArr.push(people[i].name)
    }
  }
  return adultsArr
}


console.log(adults(ppl))