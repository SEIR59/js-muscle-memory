///NOTE ALL Task 3 Exercises where typed out here and then passed into their seperate files

let str = 'pizza';
if (str.length > 10) {
    console.log('long strirng')
} else {
    console.log('short string')//this will print
}
if (str[0] === 'p') {
    console.log('starts with p') //this will print
}

/// 3b

let num = 15;
if (num % 3 === 0) {
    console.log('divisible by 3');
} else if (num %5 === 0) {
    console.log('divisbile by 5')
}

///3c

let num = 15;
if (num %3 === 0) {
    console.log('divisible by 3')
}
if (num % 5 === 0) {
    console.log('divisible by 5')
}

///3d

let str = 'General Assembly';
if (str[0] === str[0].toUpperCase()) {
    console.log('starts with a capital!');
}
if (str[str.length] === str[str.length - 1].toUpperCase()){
    console.log('ends with a capital')
}

///3e

let num = =44;
if (num > 0) {
    console.log('positive');
} else if (num < 0) {
    console.log('negative')
} else {
    console.log(0);
}
if (num % 2 === 0) {
    console.log('even');
} else (
    console.log('odd')
);