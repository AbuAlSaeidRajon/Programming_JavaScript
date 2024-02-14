// Exerice 6: Log each letter of array items
// let furniture = ['Table', 'Chairs', 'Couch'];
/*
For each item in the furniture array, log every letter.
Expected outcomes:
"Letters in 'Table': T, a, b, l, e"
...
"Letters in 'Couch': C, o, u, c, h"
*/
// Write your code here

let furnitures = ['Table', 'Chairs', 'Couch'];

for (const item of furnitures) {
    console.log(`Letters in '${item}': ${item.split('').join(', ')}`);
}
