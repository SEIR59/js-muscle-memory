let str1 = 'marker';
let num = 'whiteboard'.length - str1.length
console.log(num);//undefined?
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); //error?
let char = str2[num].toLowerCase(); //error?
console.log(char + '!'); //error?