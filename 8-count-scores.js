/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

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
  // Create an empty object to store values in
  let finalScores = {}

  // For each person
  people.forEach(person => {
    // Create a variable to hold their name
    let name =  Object.values(person)[0]
    // Create a variable to hold their score
    let score = Object.values(person)[1]

    // If that person's name is in the score already, add their score to their total scores
    if (name in finalScores) finalScores[name] += score

    // Otherwise that new person has a score of...
    else finalScores[name] = score
  })
  return finalScores
}


