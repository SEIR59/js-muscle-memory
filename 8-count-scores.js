/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

function TAKES ARRAY of PEOPLE
PEOPLE has STRING:NUMBER.
function RETURNS OBJECT with NAME:SCORE


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
  let scoreObj = {};
  people.forEach(player => {
    if (player.name in scoreObj) {
      scoreObj[`${player.name}`] += player.score;
    } else {
      scoreObj[`${player.name}`] = player.score;
    }
  });
  return scoreObj;
}

const ppl = [ 
  {name: "Pete", score: 10},
  {name: "Mike", score : 10},
  {name: "Pete", score: -8},
  {name: "Dexter", score: 12}
];

const countPpl = countScores(ppl);
countPpl; //=> { Pete: 2, Mike: 10, Dexter: 12 }

// Example 2

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
