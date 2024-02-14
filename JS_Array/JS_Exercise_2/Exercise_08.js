// Exerice 8: Filter Odd Years
/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
Expected outcomes:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Write your code here

// Sample usage - Uncomment to test your function
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
// console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]

function getOddYears(years) {
    return years.filter(year => year % 2 !== 0);
}

console.log(getOddYears([2019, 2020, 2021])); 
console.log(getOddYears([2000, 2015, 2018, 2020]));