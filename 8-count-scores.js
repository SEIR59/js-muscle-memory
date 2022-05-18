/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.
[{}]
Example 1

const ppl = [ 
    {name: "Pete", score: 10},
    {name: "Mike", score : 10},
    {name: "Pete", score: -8},
    {name: "Dexter", score: 12}
];

const countPpl = countScores(ppl);
countPpl; //=> { Pete: 2, Mike: 10, Dexter: 12 }

Example 2

const peeps = [
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2}
];
countScores(peeps); //=> { Pete: 4, Mike: 4, Dexter: 6 }
***********************************************************************/


function countScores(people) {
  //make a list for people to go into, where their scores will be added
  let solutionArray = []
  //work through list of people objects
  for (let person of people) {
    //find the index for them in the solution array. Could probably use some other method here, not sure.
    let index = solutionArray.map((x) => x.name).indexOf(person.name)
    //if index doesnt exist, meaning their name doesnt exist in the solution array yet
    if (index === -1) {
      //add them
      solutionArray.push(person)
      //if they are in the array
    } else {
      //add that new score to their current score
      solutionArray[index].score += person.score
    }
  }
  //return the list of people with their scores added
  return solutionArray

}
//  people.forEach((person) => solutionArray.map((result)=> result.name === person.name ? (result.score += person.score) : solutionArray.push(person)))

/* return people.map((person) => 
people.filter(people[person]).reduce((x,y)=> 
x.score+=y.score )) */


const ppl = [
  { name: "Pete", score: 10 },
  { name: "Mike", score: 10 },
  { name: "Pete", score: -8 },
  { name: "Dexter", score: 12 }
];

console.log(countScores(ppl))