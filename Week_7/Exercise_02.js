// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
    // Code here
    try {
        console.log(undefinedVariable);
    } catch (error) {
        console.log('ReferenceError:', error.message);
    }
  }
  
  task2();
  