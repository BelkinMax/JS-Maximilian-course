// Pure function always returns the same result for the same input
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// Impure function
function addRandom(num1, num2) {
  return (num1 + num2 + Math.random() * 10).toFixed();
}

console.log(addRandom(1, 5));
console.log(addRandom(12, 15));

// Preconfigured function
// Closures

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return tax * amount;
  }
  return calculateTax;
}

const calculateTaxAnount = createTaxCalculator(0.2);
const calculateIncomeTax = createTaxCalculator(0.5);

console.log(calculateTaxAnount(100));
console.log(calculateIncomeTax(200));
