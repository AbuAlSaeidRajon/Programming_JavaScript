// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
    // Code here
    try {
        if (index < 0 || index >= array.length) {
            throw new Error("Index out of bounds");
        }
        console.log("Value:", array[index]);
    } catch (error) {
        console.error(error.message);
    }
  }
 
  task5([1, 2, 3], 5); // error
  task5([1, 2, 3], 3); // working