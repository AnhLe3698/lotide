const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`😁🤪✅ Arrays are equal`);
  } else {
    console.log(`🤢🤮❌ Arrays are not equal`);
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

const without = function(array1, rmvArray) {
  let result = [];
  if (eqArrays(array1, rmvArray)) {
    return [];
  } else {
    for (const element of array1) {
      result.push(element); //add element
      for (const rmvElement of rmvArray) {
        if (element === rmvElement) {
          result.pop(); //delete last element if equal to rmv array
        }
      }
    }
  }
  return result;
};

console.log(without([3,2,1,2], [1,2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
assertArraysEqual(without([3,2,1,2], [1,2]), [3]);