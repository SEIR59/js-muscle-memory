/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:


***********************************************************************/
const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];
console.log(adults(ppl)); // => [ 'Khalid Robinson', 'Post Malone' ]

function adults(people) {
  const ofAge = people.filter((ppl) =>{
  if (ppl.age >= 18){
      return true
    } else {
      return false;
    }
  })
return ofAge;
};



// const cities = [
  //   {name: "Los Angeles", population: 5000000},
  //   {name: 'New York', population: 8000000},
  //   {name: 'Dallas', population: 3000000}
  // ]
  // //filter out cities that have more than 4,000,000
  // const bigCity = cities.filter((city) => {
  //   if(city.population > 4000000){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // console.log(bigCity)