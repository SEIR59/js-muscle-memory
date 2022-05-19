function sayHello (name){
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'))

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you?'
    return msg
}

console.log(sayHello('Norberto'))

function sayHello(name) {
    let msg = 'Hello ' + name + '. How are you doing?'
    return msg
}
console.log(sayHello('Coco'))

function morphology(verb) {
    let word = 'The past tense of ' + verb + ' is ' + verb + 'd'
    return word
}
console.log(morphology('Dance'))

let max = [ 1, 2, 3, 4, 5]
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1);
        
        if (i % 3 === 0 && i % 5 !==0){
            console.log(i);
        }else if (i % 5 === 0 && i % 3 !== 0){
            console.log(i)
        }
}
console.log(max)

function fizzBuzz1(max){
    for (let i = 0; i <max; i+=1)
        if (i % 3 ===0 && i % 5 !==0){
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !==0) {
            console.log(i)
}
}

console.log(max)

function fizzBuzz1(max){
    for (let i = 0; i < max; i += 1)
        if (i % 3 ===0 % i % 5 !==0){
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0){
            console.log(i)
        }
}
console.log(max)