const testArray = [1 , 3.5, 10.12, 4, 54, 33.33, -14.4, -2, 984,1, 443];

/* 1. Slice() */
const copiedArray = testArray.slice();
console.log(copiedArray === testArray)
copiedArray.push('copy');

console.log( testArray )
console.log( copiedArray )

const partArray = testArray.slice(2, 5);
console.log( partArray );

// combines arrays
const storedResult = testArray.concat(copiedArray, partArray);
console.log( storedResult )

// find in array
console.log( storedResult.indexOf(33.33) ) // find the FIRST item in array
console.log( storedResult.lastIndexOf(33.33) ) // find the LAST item in array

// reference data
const data = [ {name: 'Max'}, {name: 'Bob'}, {name: 'Manu'}];
//console.log(data.indexOf({name: 'Max'})) // DOESNT FIND

/* HOW TO FIND OBJECTS? */
console.log(data);

const max = data.find((person, idx, persons) => {
  return person.name === 'Manu';
});
// .find() does NOT create a copy. It manipulates the original element

const maxIdx = data.findIndex((person, idx, persons) => {
  return person.name === 'Manu';
})
console.log(max, maxIdx);

// If want to check if the item is in an array.
console.log( storedResult.includes(443) )
console.log( storedResult.includes(111) )