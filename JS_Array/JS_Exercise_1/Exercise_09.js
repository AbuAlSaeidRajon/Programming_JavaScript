// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

const teamMembers = ["John", "Alex", "Mike", "Bobb"];

teamMembers.splice(2, 1, "Carol", "Bruce");
console.log(teamMembers);