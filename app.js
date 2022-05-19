// Practice

// DOM elements

// DOM Events

// DOM Manipulation


const peeps = [
    {name: "Pete", score: 2},
    {name: "Dexter", score: 2},
    {name: "Mike", score: 2},
    {name: "Dexter", score: 2},
    {name: "Mike", score: 2},
    {name: "Pete", score: 2},
    {name: "Dexter", score: 2}
  ];
 
  
  const ppl = [ 
    {name: "Pete", score: 10},
    {name: "Mike", score : 10},
    {name: "Pete", score: -8},
    {name: "Dexter", score: 12}
  ];
  
  
  function countScores(people) {
    let points = {};
  
    for (let i = 0; i < people.length; i += 1) {
      let personObj = people[i];
      let name = personObj.name;
      let score = personObj.score;
  
      if (points[name]) {
        points[name] += score;
      } else {
        points[name] = score;
      }
    }
    console.log(points)
    return points;
    
  }

  countScores(peeps); //=> { Pete: 4, Mike: 4, Dexter: 6 }
  
//   const countPpl = countScores(ppl);
//   countPpl; //=> { Pete: 2, Mike: 10, Dexter: 12 }
  