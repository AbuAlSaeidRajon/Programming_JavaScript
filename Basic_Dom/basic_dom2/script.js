/* Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list. */

document.addEventListener("DOMContentLoaded", function () {
    const fruitInput = document.getElementById("fruitInput");
    const addFruitBtn = document.getElementById("addFruitBtn");
    const fruitList = document.getElementById("fruitList");
  
    addFruitBtn.addEventListener("click", function () {
      const newFruit = fruitInput.value;
      console.log(newFruit);
  
      if (newFruit.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = fruitInput.value;
        fruitList.appendChild(li);
        fruitInput.value = "";
      } else {
        alert("Please enter a fruit name");
      }
    });
  });
  