function skipFirstCharacter(text) {
    // Use substring starting from index 1 to exclude the first character
    return text.substring(1);
  }
  
  // Sample usage - do not modify
  console.log(skipFirstCharacter("Xcode")); // "code"
  console.log(skipFirstCharacter("Hello")); // "Hello"
  