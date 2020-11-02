// Pure function always returns the same result for the same input
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// Impure function
function addRandom(num1, num2) {
  return (num1 + num2 + (Math.random() * 10)).toFixed();
}

console.log(addRandom(1, 5));
console.log(addRandom(12, 15));