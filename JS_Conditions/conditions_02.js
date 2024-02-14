// Get temperature input from the user
const temperature = Number(prompt("What is the current temperature?"));

if (temperature < 15) {
  console.log("It is cold. You should wear a jacket.");
} else {
  console.log("It is not too cold. A jacket may not be necessary.");
}
