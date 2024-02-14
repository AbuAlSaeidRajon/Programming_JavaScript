function capitalize(word) {
    // Capitalize the first letter and concatenate with the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
  // Sample usage - do not modify
  console.log(capitalize('sam')); // "Sam"
  console.log(capitalize('ALEX')); // "Alex"
  console.log(capitalize('chARLie')); // "Charlie"
  