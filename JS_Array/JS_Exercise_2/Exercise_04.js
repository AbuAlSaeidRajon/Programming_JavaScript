// Exerice 4: Log array items without using a loop
// let myArr = [1, 2, 'One', true];
/*
Log each item in this array without explicitly using a loop.
Expected outcomes: 1, 2, "One", true
*/
// Write your code here

let myArr = [1, 2, 'One', true];

const resultString = myArr.map(item => typeof item === 'string' ? `"${item}"` : item).join(', ');
console.log(resultString);
