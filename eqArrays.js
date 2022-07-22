/*
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
*/
// This is a recursive eqArray Function!
// It can handle many(inifinite?) nested arrays!
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else if (array1.length === 0 && array2.length === 0) {
    return true;
  }
  let x = array1.pop();
  let x2 = array2.pop();
  // checks if the elements are arrays, and will recursively
  // iterate through array elements
  if (Array.isArray(x) && Array.isArray(x2)) {
    if (!eqArrays(x,x2)) {
      return false;
    }
    // Checking if elements equal one another
  } else if (x !== x2) {
    return false;
  }
  // Recursively iterate for each non array element
  return eqArrays(array1,array2);
};

module.exports = eqArrays;