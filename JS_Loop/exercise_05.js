// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

/* let sum = 0;
let counter = 0;

do {
  let input = Number(prompt("Enter a number"));
  sum += input;
  counter++;
} while (counter === 20);

console.log("Average was ${sum / counter}"); */



let totalNumbers = 0;
let sum = 0;

while (true) {
    let number = parseFloat(prompt("Enter a number (enter 0 to terminate):"));

    if (!isNaN(number)) {
        if (number === 0) {
            break;
        }

        sum += number;
        totalNumbers++;
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

if (totalNumbers > 0) {
    const average = sum / totalNumbers;
    alert("Average of entered numbers: " + average);
} else {
    alert("No valid numbers were entered.");
}

