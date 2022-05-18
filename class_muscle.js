class Player {
  constructor(name, age, colleague) {
    this.testConstant = 10;
    this.name = name;
    this.age = age;
    this.colleague = colleague;

    // intro() {
    //     return `Hello, my name is ${this.name}`;
    //   }
    this.doSomething = function () {
      return `Hello, my name is ${this.name}`;
    };
  }
  //another name???
  name = "Henry"; // Johon is overwrite Henry

  //   height = 3;  - not recommended

  //methods (functions)

  run() {
    return "Run!";
  }
}

const playerOne = new Player();
playerOne.name = "John"; //good
playerOne.testConstant = 20; //works in terminal
console.log(playerOne);
// console.log(playerOne.doSomething()); ///this works

// class TVshows {
//   constructor(name, actress, actor, yearReleased, rottenTomatoes) {
//     this.name = name;
//     this.actress = actress;
//     this.actor = actor;
//     this.yearReleased = yearReleased;
//     this.rottenTomatoes = rottenTomatoes;
//   }
// }
// const modernFamily = new TVshows();
