//Why Why use Classes:
//A structure for data. best way to do that is use class. 


class Player {
    //how we construct class to be an object. Player is a class that allows us to build a player object .Class is a structure.
    constructor(name, age, college){
        this.name = name;
        this.age = age;
        this.college = college;
    }

    //Methods. (functions) on the Player class. 
    intro(){
        return `Hello my name is ${this.name}`
    }

    run(){
        return `RUNNNNNNNNNNN!`
    }
}

const playerOne = new Player('Jordan', '27', 'CCNY'); //constructs a player object
const playerTwo = new Player('Kate', '25', 'Barnard');

// console.log(playerOne.intro())

class InstagramUser {
    constructor(email, userName, age, location){
        this.email = email;
        this.userName = userName;
        this.age = age;
        this.location = location
        this.admin = false;
    }

}
//making an instance of InstagramUser
const johnSmith = new InstagramUser('John@gmail.com','JohnSmith1',20,"boston")
johnSmith.admin = true;

//vs 
const array = [
    {email: 'John@gmail.com',
     userName : "JohnSmith1",
     Age: 20,
     location: "boston"
}
]

// console.log(johnSmith)
// console.log(array[0])

// johnSmith.age = 26
console.log(johnSmith)

//put all of this in a function. Starting point 
//can grab input values from form to pupulate these parameters. 
function setup(name,age,college){
    //make a class out of player
    const newPlayer = new Player(name,age,college)

    return newPlayer
}

const result = setup("sammy",18,"UK")
//const result = setup(inputOne.valueO,inputTwo.value,inputThree.value)

console.log(result)

//////////////////////////////////////////

class cardHand{
    constructor(Aces,Spades,Diamonds,Hearts){
        this.Aces = Aces;
        this.Spades = Spades;
        this.Diamonds = Diamonds;
        this.Hearts = Hearts
    }
}

let myHand = new cardHand(2,3,1,6)
console.log(myHand)
