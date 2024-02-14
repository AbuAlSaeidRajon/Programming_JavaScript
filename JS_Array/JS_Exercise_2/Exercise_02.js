// Exerice 2: Iterate over array and log each item with its index
// const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
/*
Log each planet in the array along with its index.
Expected outcomes:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

for (const planet of planets) {
  console.log(`Planet: ${planet}, Index: ${planets.indexOf(planet)}`);
}
