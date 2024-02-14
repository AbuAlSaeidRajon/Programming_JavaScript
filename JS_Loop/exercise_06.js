// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

let numbers = [];
let userInput;
do {
  userInput = parseInt(prompt("Enter a number:"));
  numbers.push(userInput);
  let choice = prompt("Do you want to continue giving numbers? (y/n):");
  if (choice.toLowerCase() !== 'y') {
    break;
  }
} while(true);
let sum = numbers.reduce((a, b) => a + b, 0);
let average = sum / numbers.length;
console.log(`The average of the entered numbers is: ${average}`);