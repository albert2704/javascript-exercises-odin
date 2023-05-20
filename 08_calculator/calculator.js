const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  let result = 1;
  if(arr.length == 0) result = 0;
  arr.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let result = 1;
  for(let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
