// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
    try {
      // Outer try block
      console.log('Outer try block started');
  
      try {
        // Nested try block
        console.log('Nested try block started');
  
        // Simulate an error
        throw new Error('Simulated error');
  
        console.log('Nested try block completed');
      } catch (error) {
        // Handle the error in the nested catch block
        console.error('Nested catch block:', error.message);
      }
  
      console.log('Outer try block completed');
    } catch (error) {
      // Handle any errors that might occur in the outer try block
      console.error('Outer catch block:', error.message);
    }
  }
  
  task4();