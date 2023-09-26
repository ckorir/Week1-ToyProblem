const readline = require("readline");
// imports functions in the speed file
const getSpeed = require("./speed");
// allows user to enter data and processes it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Prompts user to enter some data based on the question
rl.question("Enter the speed of the car in km/s: ", (speedinput) => {
  console.log(getSpeed(speedinput));
  rl.close();
});
