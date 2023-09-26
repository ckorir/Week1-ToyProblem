const readline = require("readline");
// imports functions in the salary file
const getSalary = require("./salary");
// allows user to enter data and processes it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Prompts user to enter some data based on the question
rl.question("\n Enter your Basic Salary: ", (salary) => {
    console.log(getSalary(salary));
    rl.close();
});
