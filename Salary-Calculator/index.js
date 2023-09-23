const readline = require("readline");
const getSalary = require("./salary");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\n Enter your Basic Salary: ", (salary) => {
    console.log(getSalary(salary));
    rl.close();
});