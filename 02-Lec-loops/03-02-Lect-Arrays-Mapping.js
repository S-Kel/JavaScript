// MAPPING ARRAYS 
// Mapping is the same as the .inject in ruby

let nums = [2, 3, 4];
let fruit = ['Apple', 'Orange', 'Lemon', 'Watermelon', 'Banana'];

let squares = nums.map(x => x ** 2) // [ 4, 9, 16 ]
let fruits = fruit.map(x => x.toUpperCase()) // [ 4, 9, 16 ]

// SEARCH: find(object)
let keyword = prompt("Please enter a keyword");
let found = fruits.find(x => x === keyword.toUpperCase());
let results = "";
if (found) results = `Congratulations! ${keyword} is in the list`;
else results = `Sorry ${keyword} is Not found!`;

// SEARCH: filter(object)
// Similar to map, but will only keep items where the given expression is 
// true.The kept items are unmodified.
let numbers = [5, 2, 8, 7, 12]
let oddNumbers = numbers.filter(x => x % 2 == 1) // [ 5, 7 ]

fruit.toLowerCase
    // Return elements that starts with a vowel
myfruits = fruits.filter(x => x.match(/^[aeiou]/i)).join("<br>");
let vow = fruits.filter(x => ['a', 'e', 'i', 'o', 'u'].includes(x[0].toLowerCase())).join("<br>");


// OUTPUT TO CONSOLE
console.log(squares);
console.log(fruits);
// console.log(myfruits);
console.log(results);

// OUTPUT TO WEBPAGE 
document.write(fruits + "<br>");
document.write("<h2>" + myfruits + "</h2>");
document.write(vow + "<br>");
document.write(results + "<br>");