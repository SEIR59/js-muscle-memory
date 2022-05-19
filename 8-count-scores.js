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
  // create object to place names / scores into
  let pplObj = {
  };
  people.forEach(element => {
    // check if name exist in entry
    if (element.name in pplObj) {
      // if it exist just update the score.
      pplObj[`${element.name}`] += element.score;
    } else {
      // if it doesn't exist, add it to the objext with a score.
      pplObj[`${element.name}`] = element.score;
    } 
  });
  return pplObj;
}

const ppl = [ 
  {name: "Pete", score: 10},
  {name: "Mike", score : 10},
  {name: "Pete", score: -8},
  {name: "Dexter", score: 12}
];

const countPpl = countScores(ppl);
console.log(countPpl); //=> { Pete: 2, Mike: 10, Dexter: 12 }

const peeps = [
{name: "Pete", score: 2},
{name: "Dexter", score: 2},
{name: "Mike", score: 2},
{name: "Dexter", score: 2},
{name: "Mike", score: 2},
{name: "Pete", score: 2},
{name: "Dexter", score: 2}
];


console.log(countScores(peeps)); //=> { Pete: 4, Mike: 4, Dexter: 6 }