// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
    // Code here
    try {
        console,log("Execution started");
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log("Execution Completed");
    }
  }

  task3();