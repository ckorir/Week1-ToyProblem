const readline = require("readline");
const getSalary = require("./salary");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\nEnter your Basic Salary: ", (salary) => {
    console.log(getSalary(salary));
    rl.close();
});