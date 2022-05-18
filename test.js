let newArray = "";
let array = [];
let keys = "";
let newPhoneBook = [];

for (phone of phoneBook) {
  keys = Object.keys(phone);
  //console.log(keys)
  //console.log(phone)
  //gets all the numbers
  numbers = [phone[Object.keys(phone)[0]]];
  //console.group(numbers)

  //returns an array of each of the numbers, with each number split into different elements of array
  array = numbers.map((num) => {
    return num.split("");
  });
  //console.log(array)

  //adds the country code and - into a new array
  newArray = array.map((el) => {
    el.unshift(el[0]);
    el.splice(1, 0, "-");
    return el.join("");
  });
  //console.log(newArray)
  //turn newArray to string
  numString = newArray.toString();
  //console.log(numString)
  //create
  const newPhoneBookItem = { [keys]: numString };
  //console.log(newPhoneBook)
  newPhoneBook.push(newPhoneBookItem);
  //console.log(newArray)
}

console.log(newPhoneBook);
