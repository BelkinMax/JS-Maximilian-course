/* 1 */

// Create an array of numbers.
const inputNumbersArray = [
  1,
  -7,
  -9,
  -10,
  5,
  9,
  -4,
  2,
  -1,
  6,
  -8,
  -3,
  8,
  0,
  3,
  -5,
  4,
  7,
  -2,
  -6,
  1,
  6,
  -5
];

console.log(`
-- A.1-1 --

Input array of numbers: ${inputNumbersArray}
`);

// Filter for numbers grater than 5.
const numbersArrayFiltered = inputNumbersArray.filter((number) => number > 5);

console.log(`
-- A.1-2 --

Numbers grater than 5: ${numbersArrayFiltered}
`);

// Map every number to an object.
const numbersMap = numbersArrayFiltered.map((number) => ({ num: number }));

console.log(`
-- A.1-3 --

Mapped numbers:`,
numbersMap);

// Reduce the array to a single number by mult. it.
const multNumbersResult = numbersArrayFiltered.reduce(
  (previousNum, currentNum) => {
    return previousNum * currentNum;
  },
  1
);

console.log(`
-- A.1-4 --

Reduce to a single number: ${multNumbersResult}
`);



/* 2 */

const findMax = function (...number) {
  const inputArr = number;
  return Math.max(...inputArr);
};

console.log(`
-- A.2  --

Maximum: ${findMax(...inputNumbersArray)}
`);



/* 3 */

const findExtremum = function (...number) {
  const orderedInputArr = number.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  });
  const [maxNum, minNum] = [
    orderedInputArr[0],
    orderedInputArr[orderedInputArr.length - 1],
  ];
  return [maxNum, minNum];
};

const maxNum = findExtremum(...inputNumbersArray)[0];
const minNum = findExtremum(...inputNumbersArray)[1];

console.log(`
-- A.3 --

Maximum: ${maxNum}
Minimum: ${minNum}
`)



/* 4 */

const numbersSet = new Set([...inputNumbersArray]);
console.log(`
-- A.4 --

No repetitions:
`,
numbersSet)