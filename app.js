const customers = ["Max", "Sara", "Bob"];
const activeCustomers = ["Max", "Sara"];

// Lodash
const result = _.difference(customers, activeCustomers);
console.log(result);
