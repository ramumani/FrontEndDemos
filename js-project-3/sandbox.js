const greet = function (name) {
  console.log(`Good day ${name}`);
};

const greetTwo = function (name) {
  console.log(`Good evening ${name}`);
};

const displayTime = (input) => {
  console.log(input);
  return new Date().getHours();
};

greet("Jeff");
greetTwo("Rick");

let currentTime = displayTime("check");
console.log(currentTime);
