// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
    try {
      // Simulate error
      throw new Error('Oops, something went wrong!');
      // Other code that might throw an error can also be placed here
    } catch (error) {
      console.log('An error occurred:', error.message);
    }
  }
  
  task1(); // Output: An error occurred: Oops, something went wrong!