// Exerice 7: Filter positive temperatures
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Write the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Expected outcome: [3, 22, 5, 18]
*/
// Write your code here


// Function to get positive temperatures
function getPositiveTemperatures(temperatureArray) {
    return temperatureArray.filter(temperature => temperature > 0);
}

// Test the function
const positiveTemperatures = getPositiveTemperatures(temperatures);
console.log(positiveTemperatures);



