/* SETS & MAPS */

const ids = new Set([1, 2, 3]);
ids.add(0);
ids.add(2);
console.log(ids);

// MAPS

const person1 = {name: 'Max'};
const person2 = {name: 'Anna'};

const personData = new Map([[person1, [{date: '20/10/20', price: 10}]]]);
personData.set(person2, [{date: '13/05/20', price: '14'}]);

console.log(personData);
console.log(personData.get(person1));

for(const entry of personData) {
  console.log(entry)
}

// WEAK SET

let pers = {name: 'Max'};
const persns = new WeakSet();
persns.add(pers);

person = null;

console.log(persns)