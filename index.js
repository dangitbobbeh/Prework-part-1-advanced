// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.

// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.

function forEach(array, cB) {

 }
 //forEach(['a','b','c'], cB); 
 //→ prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)

function map(array, cB) {

}
 //map([1,2,3], function(element, index, array) {
 // return element * 3;
// }); //-> [3,6,9]
 //BONUS: use the forEach method you use to create map

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.

function filter(collection, cB) {


  //collection.forEach((e,i) => (cB(e,i,collection)) ? array.push(e) : e)
  
  return array
//return array that only nclude ele which return tru from cB
}

 filter([1,2,3,4], function(element, index, collection) {
  return element % 2 === 0;
 }); //→ [2,4]
  filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
   return element % 2 !== 0;
  }); //→ [1,3]

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {

}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
	//CODE HERE

}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
	//CODE HERE

}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
	//CODE HERE

}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {

}

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
	//CODE HERE

}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {

}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {

}