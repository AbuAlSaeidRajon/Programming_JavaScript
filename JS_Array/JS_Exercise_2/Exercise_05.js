// Exerice 5: Find common courses between two students
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
/*
Identify and log any courses common to both student1Courses and student2Courses.
Expected outcome: "Common course: Programming"
*/
// Write your code here

const commonCourses = student1Courses.filter(course => student2Courses.includes(course));
commonCourses.forEach(course => console.log(`Common course: ${course}`));
