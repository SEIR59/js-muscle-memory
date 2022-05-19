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

// countScores(ppl)
// const ppl = [
//   {name: "Pete", score: 10},
//   {name: "Mike", score : 10},
//   {name: "Pete", score: -8},
//   {name: "Dexter", score: 12}
// ];
function countScores(ppl) {
  let scoresObj = {};

  for (i = 0; i < ppl.length; i++) {
    let pplObj = ppl[i];
    let name = pplObj.name;
    let score = pplObj.score;

    if (scoresObj[name]) {
      scoresObj[name] += score;
    } else {
      scoresObj[name] = score;
    }
  }
  return scoresObj;
}

const ppl = [
  { name: "Pete", score: 10 },
  { name: "Mike", score: 10 },
  { name: "Pete", score: -8 },
  { name: "Dexter", score: 12 },
];

const countPpl = countScores(ppl);
console.log(countPpl);
