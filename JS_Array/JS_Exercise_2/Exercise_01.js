// Exerice 1: Determine array length and conditional check
// let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here

let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function myAlphabetLength() {
    console.log(myAlphabet.length);

    if (myAlphabet.length < 5) {
        console.log("Array length is less than 5.");
    } else {
        console.log("Array length is greater than or equal to 5.")
    }
}

myAlphabetLength();