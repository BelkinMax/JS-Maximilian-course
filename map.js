/* MAP */

const prices = [10.99, 6.99, 8.39, 2.19, 14.99];
const tax = .21;

const taxAdjPrices = prices.map((price, idx, prices) => {
  const priceObj = {
    index: idx,
    taxAdjPrice: price * (1 + tax)
  };
  return priceObj;
});

console.log(prices);
console.log(taxAdjPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
console.log(sortedPrices);

const filteredArr = prices.filter((price, idx, prices) => {
  return price > 10;
});
console.log(filteredArr);

// REDUCE
const sum = filteredArr.reduce((prev, cur, curIdx, array) => {
  return prev + cur;
}, 0)

console.log(sum)

const copied = [...filteredArr];

console.log(filteredArr);
console.log(copied);

filteredArr.push(5);
console.log(filteredArr);
console.log(copied);

const [ firstName, lastName ] = [ 'Max', 'Belkin' ];
console.log(firstName, lastName)