const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`😁🤪✅ Arrays are equal [${array1}] === [${array2}]`);
  } else {
    console.log(`🤢🤮❌ Arrays are not equal [${array1}] !== [${array2}]`);
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

const flatten = function(array) {
  let resultingArray = [];
  for (let i = 0; i < array.length; i++) {
    // if the element i is also an array we need
    // a nested loop
    // Array.isArray(array) is better than .typeof()
    // This is due to that typeof recognizes arrays as Objects
    if (Array.isArray(array[i])) {
      for (const x of array[i]) {
        resultingArray.push(x);
      }
    } else {
      // adding the non-array directly to resulting array
      resultingArray.push(array[i]);
    }
    
  }
  return resultingArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [2, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['tree', ['branch', 'house'], 'woodpecker']), ['tree', 'branch', 'house', 'woodpecker']);