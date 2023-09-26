const readline = require("readline");
// imports functions in the grades file
const getGrade = require("./grades");
// allows user to enter data and processes it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Prompts user to enter some data based on the question
rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
  console.log(getGrade(mark));
  rl.close();
});
