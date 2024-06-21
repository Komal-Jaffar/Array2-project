// Create an array of employee objects
var employees = [
    {
        name: "Komal",
        hoursWorked: 40,
        hourlyRate: 20,
        salary: 0, // Placeholder value, will be calculated
    },
    {
        name: "Muskan",
        hoursWorked: 30,
        hourlyRate: 18,
        salary: 0,
    },
    {
        name: "Rabia",
        hoursWorked: 25,
        hourlyRate: 22,
        salary: 0,
    },
];
// Function to calculate salary
function calculateSalary(employee) {
    // Calculate base salary
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    // Apply bonus if hours worked are 20 or more
    if (employee.hoursWorked >= 20) {
        var bonus = 0.1 * employee.salary; // 10% bonus
        employee.salary += bonus;
    }
}
// Display employee details and calculated salary
function displayEmployeeDetails(employee) {
    console.log("Employee: ".concat(employee.name));
    console.log("Hours Worked: ".concat(employee.hoursWorked));
    console.log("Hourly Rate: $".concat(employee.hourlyRate.toFixed(2)));
    console.log("Base Salary: $".concat(employee.salary.toFixed(2)));
    console.log("\n");
}
// Example usage
console.log("Employee Details:");
employees.forEach(function (emp) {
    calculateSalary(emp); // Calculate salary for each employee
    displayEmployeeDetails(emp);
});
