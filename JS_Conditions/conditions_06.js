function pluralize(noun, number) {
    return number !== 1 ? `${number} ${noun}s` : `${number} ${noun}`;
  }
  
  // Sample usage - do not modify
  console.log("I have " + pluralize("cat", 0)); // I have 0 cats
  console.log("I have " + pluralize("dog", 1)); // I have 1 dog
  console.log("I have " + pluralize("parrot", 7)); // I have 7 parrots
  