const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line, adding inspect library
  // ...
  if (eqObjects(actual, expected)) {
    console.log(`😁🤪✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤢🤮❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(array1, array2) {
  // This conditional will check if the arrays are same size
  if (array1.length === array2.length) {
    let checkNum = 0; // Track if all entries are equal!
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        checkNum += 1;
      }
    }
    // The following conditional will check if all the entries
    // are equal.
    if (checkNum === array1.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  // the following method Object.keys(object).length determines amount of keys
  // we first need to determine if the objects are same size
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  // Only objects of equal size can be compared.
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      //Checking if the 2nd object has the key and is an array.
      if (Array.isArray(object2[key]) && object2[key] !== undefined) {
        //looping through the Value Array using eqArrays function
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;
      }
    } else {
      // This last check determines if two non-array values are the same for a given key
      if (object2[key] === undefined || object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abcd = { a: [1,2,3], b: "2", c: "3" };
const abcde = {b: "2", a: [1,2,3], c: "3" };
const abcdef = {b: "2", a: [1,2,3,4], c: "3" };
const abcdefg = {};
assertObjectsEqual(abcd, abcde);  // should pass
assertObjectsEqual(abcde, abcdef); // should fail
assertObjectsEqual(ab, ba); // should pass
assertObjectsEqual(ab, abc); // should fail
assertObjectsEqual(abcdefg, abcdefg); // should pass