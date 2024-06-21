// Create an array of student objects
var students = [
    {
        name: "Komal",
        grades: [70, 45, 80, 65], // Example grades for komal
    },
    {
        name: "Muskan",
        grades: [70, 90, 50, 64], // Example grades for muskan
    },
    {
        name: "Alizy",
        grades: [60, 90, 80, 75], // Example grades for Alizy
    },
];
// Function to calculate average grade
function calculateAverageGrade(student) {
    var totalGrades = student.grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return totalGrades / student.grades.length;
}
// Display student details and average grade
function displayStudentDetails(student) {
    var averageGrade = calculateAverageGrade(student);
    console.log("Student: ".concat(student.name));
    console.log("Average Grade: ".concat(averageGrade.toFixed(2)));
    console.log("\n");
}
// Example usage
console.log("Student Details:");
students.forEach(displayStudentDetails);
