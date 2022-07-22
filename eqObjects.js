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
*/

// New recursive function underneath

const eqObjects = function(object1, object2) {
  // Need to run the main function both ways to assure that both objects
  // are the same not just that one is a subset of the other.
  if (main(object1,object2) && (main(object2, object1))) {
    return true;
  } else {
    return false;
  }
};

const main = function(object1, object2) {
  for (const items in object1) {
    // Checks if the element is an object.
    if (typeof(object1[items]) === 'object' && !Array.isArray(object1[items]) && typeof(object2[items]) === 'object' && !Array.isArray(object2[items])) {
      // Recursively call main if it is an object.
      if (!main(object1[items], object2[items])) {
        return false;
      }
      // Checks if elements are both arrays
    } else if (Array.isArray(object1[items]) && Array.isArray(object2[items])) {
      if (!eqArrays(object1[items], object2[items])) {
        return false;
      }
      // Checks if both elements are not the same or undefined.
    } else if (object1[items] !== object2[items] || object2[items] === undefined) {
      return false;
    }
  }
  return true;
};

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

module.exports = eqObjects;
 