// Define a type alias for Student
type Student = {
    name: string;
    grades: number[];
};

// Create an array of student objects
const students: Student[] = [
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
function calculateAverageGrade(student: Student): number {
    const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
    return totalGrades / student.grades.length;
}

// Display student details and average grade
function displayStudentDetails(student: Student): void {
    const averageGrade = calculateAverageGrade(student);
    console.log(`Student: ${student.name}`);
    console.log(`Average Grade: ${averageGrade.toFixed(2)}`);
    console.log("\n");
}

// Example usage
console.log("Student Details:");
students.forEach(displayStudentDetails);
