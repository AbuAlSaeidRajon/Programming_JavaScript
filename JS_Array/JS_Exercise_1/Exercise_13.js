// Exercise 13: Finding all occurrences of a John
// Write your code here:

const teamMembers = ["John", "Mike", "Alex", "Bobb"];

const johnOccurrencesFilter = teamMembers.filter(member => member === "John");
const johnFirstOccurrenceFind = teamMembers.find(member => member === "John");


console.log(johnFirstOccurrenceFind);
console.log(johnOccurrencesFilter);
