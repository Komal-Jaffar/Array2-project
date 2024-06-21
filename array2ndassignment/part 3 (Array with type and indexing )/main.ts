// Define a type alias for Employee
type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
};

// Create an array of employee objects
const employees: Employee[] = [
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
function calculateSalary(employee: Employee): void {
    // Calculate base salary
    employee.salary = employee.hoursWorked * employee.hourlyRate;

    // Apply bonus if hours worked are 20 or more
    if (employee.hoursWorked >= 20) {
        const bonus = 0.1 * employee.salary; // 10% bonus
        employee.salary += bonus;
    }
}

// Display employee details and calculated salary
function displayEmployeeDetails(employee: Employee): void {
    console.log(`Employee: ${employee.name}`);
    console.log(`Hours Worked: ${employee.hoursWorked}`);
    console.log(`Hourly Rate: $${employee.hourlyRate.toFixed(2)}`);
    console.log(`Base Salary: $${employee.salary.toFixed(2)}`);
    console.log("\n");
}

// Example usage
console.log("Employee Details:");
employees.forEach((emp) => {
    calculateSalary(emp); // Calculate salary for each employee
    displayEmployeeDetails(emp);
});
