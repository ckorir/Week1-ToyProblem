const readline = require("readline");
const getSpeed = require("./speed");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the speed of the car in km/s: ", (speedinput) => {
  console.log(getSpeed(speedinput));
  rl.close();
});