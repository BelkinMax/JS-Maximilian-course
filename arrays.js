/* WAYS TO CREATE AN ARRAY */


/* 1. Standard */           //const numbers = [1, 2, 3];
/* 2. New Constructor */    //const numbers = new Array(5); // single number will be interpreted as a length
/* 3. Constructor */        //const numbers = new Array(5); // same as 2
/* 4. Array.of */           //const numbers = Array.of(1, 2, 3); // rare use
/* 5. Array.from */         //const numbers = Array.from('Split me') // converts an array-like object to an array

// TEST
//console.log(numbers)

/* ADDING DATA */
const hobbies = ['Cooking'];
console.log('START' + hobbies);

/* 1. Push */ let length = hobbies.push('Reading');
console.log('1. PUSH');
console.log(hobbies);
console.log(length);
/* .push() always adds a new element to the end of the array. !RETURNS THE NEW LENGTH OF THE ARRAY!*/

/* 2. Unshift */ length = hobbies.unshift('Coding');
console.log('2. UNSHIFT');
console.log(hobbies);
console.log(length);
/* .unshift() adds a new element to the start of the array. !RETURNS THE NEW LENGTH OF THE ARRAY!*/

/* 3. Splice */ const removedElements = hobbies.splice(1, 1, 'Gaming', 'Eating'); // !ONLY CAN USE ON REAL ARRAYS!
console.log('3. SPLICE');
console.log(hobbies);
console.log(removedElements);
/* .splice(start index, how many elements to remove, ...values to replace) */
/* RETURNS REMOVED ELEMENTS */
/* also can use for REMOVE or CHANGE data */

/* REMOVE DATA */

/* 1. Pop */ const popped = hobbies.pop();
console.log('1. POP');
console.log(hobbies);
console.log(popped);
/* .pop() removes the LAST element and returns it */

/* 2. Shift */ const shifted = hobbies.shift();
console.log('2. SHIFT');
console.log(hobbies);
console.log(shifted);
/* .pop() removes the FIRST element and returns it */

/* CHANGE DATA */
/* 1. Replace by index */ hobbies[1] = 'Running';
console.log('3. REPLACE');
console.log(hobbies); // rarely used