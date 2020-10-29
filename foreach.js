const prices = [10.99, 6.99, 8.39, 2.19, 14.99];
const tax = .21;

const adjustedPrices = [];

// for (const price of prices) {
//   adjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, adjPrice: price * (1 + tax)}
  adjustedPrices.push(priceObj);
})

console.log(prices);
console.log(adjustedPrices);