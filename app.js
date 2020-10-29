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