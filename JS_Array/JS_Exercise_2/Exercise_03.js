// Exerice 3: Log array items with their types
// const wowDatatypes = [1, 'text', false, null, undefined];
/*
Iterate over the array, logging each item, its index, and data type.
Expected outcomes:
"Item: 1, Index: 0, Type: number"
...
"Item: undefined, Index: 4, Type: undefined"
*/
// Write your code here

const wowDatatypes = [1, "text", false, null, undefined];

for (const item of wowDatatypes) {
  console.log(
    `Item: ${item}, Index: ${wowDatatypes.indexOf(item)}, Type: ${typeof item}`
  );
}
