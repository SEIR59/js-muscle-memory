// const container = document.querySelector('.container');
// const title = document.querySelector('h1');

// // grab element park
// const park = document.querySelector('.park');
// console.log(park);

// // grab element garden
// const garden = document.querySelector('.garden');
// console.log(garden);

// // grab element cities
// const cities = document.querySelector('.cities');
// console.log(cities);

// // selecting all the li on the page
// const lis = document.querySelectorAll('li');
// console.log(lis);

// // select JS Muslce Memory by class
// const muscleMemory = container.children[0];
// console.log(muscleMemory);

// console.log(container);


// // select the class wrapper
// const wrapper = document.querySelector('.wrapper');
// // create a paragraph tag
// const p1 = document.createElement('p');
// p1.textContent = 'Hello!!';
// // append the paragraph tag to the class wrapper
// wrapper.appendChild(p1);

// // select the id one
// const one = document.querySelector('#one');
// // create a paragraph element
// const para = document.createElement('p');
// // add some text to the paragraph element
// para.textContent = 'There can be only one!';
// // append the paragragh to the id one
// one.appendChild(para);

////////////////////////////////////////////////////

// const exercises = [
//     {
//         exercise: 'dumbbell curls🏋🏽',
//         bodyType: 'biceps',
//         bodyPart: 'arms'
//     },
//     {
//         exercise: 'running 🏃🏽‍♂️',
//         bodyPart: 'legs'
//     },
//     {
//         exercise: 'sit ups 🤸🏽‍♀️',
//         bodyType: 'abs ',
//         bodyPart: 'core'
//     }
// ];

// function addExercisesToContainer(array) {
//     // iterate through the array
//     for (let i = 0; i < array.length; i++) {
//         // set each element to a variable
//         let exerciseVariable = array[i].exercise;
//         let newElement = document.createElement('p');
//         newElement.textContent = exerciseVariable;
//         container.appendChild(newElement);
//     }
    
//     // create a new element
//     // access "exercise" key to get value
//     // add value text to element (textContent)
//     // append new element to container
// };

// addExercisesToContainer(exercises);

  ////////////////////////////////////////
 /////////     NEXT SECTION     /////////
////////////////////////////////////////

class Player {
    constructor(name, age, college) {
        this.name = name;
        this.age = age;
        this.college = college;
    }

    //methods (functions)
    intro() {
        return `Hello, my name is ${this.name}`;
    }

    run() {
        return 'Run';
    }
}

const player1 = new Player('Kenny', 27, 'McDaniel College');
console.log(player1.intro());

class GameCharacter {
    constructor(name, colorTheme, ability) {
        this.name = name;
        this.colorTheme = colorTheme;
        this.ability = ability;
    }

    pressA() {
        console.log(`${this.name} ${this.ability}ed!`);
    }
}

const mario = new GameCharacter('Mario', 'red', 'jump');
mario.pressA();

  ////////////////////////////////////////
 /////////     NEXT SECTION     /////////
////////////////////////////////////////

// let num = 9;
// if (num > 5) {
//   console.log('if');
// }

// let num = 23;
// if (num > 5) {
//   console.log('if');
// }

// let num = 31;
// if (num > 5) {
//   console.log('if');
// }

// let num = -33;
// if (num > 5) {
//   console.log('if');
// }

// let num = 912341;
// if (num > 5) {
//   console.log('if');
// }

// let num = 90;
// if (num > 5) {
//   console.log('if');
// }

// let num = -412;
// if (num > 5) {
//   console.log('if');
// }

// let num = 9000;
// if (num > 5) {
//   console.log('if');
// }

// let num = 9001;
// if (num > 5) {
//   console.log('if');
// }

// let num = 9999999999;
// if (num > 5) {
//   console.log('if');
// }

////////////////


// let num = 5; 
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = 1;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = 0;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = 2828;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = -80;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = 72;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = 110;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = -32;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = 4;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

// let num = 6;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }


////////////////

// let num = 1;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = 6;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = -2;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = 98;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = 47;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = 2;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = 11;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

// let num = -666;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

let num = 1;
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

  ////////////////////////////////////////
 /////////     NEXT SECTION     /////////
////////////////////////////////////////

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  console.log(sayHello('bootcamp prep')); 

  /////////////////////

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(5)); 
 
 
  /////////////////////

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

 //////////////////////

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  function evenCaps(sentence) {
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (i % 2 === 0) {
        let capitalChar = char.toUpperCase();
        newSentence += capitalChar;
      } else {
        newSentence += char;
      }
    }
  
    return newSentence;
  }

  