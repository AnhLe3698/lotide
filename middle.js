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

const middle = function(array) {
  let middleArray = [];
  if (array.length === 1 || array.length === 2 || array.length === 0) {
    // returning an empty array if there is 0, 1, or 2 elements
    return middleArray;
  } else if (array.length % 2 === 1) {
    // for odd numbers we need to return 1 number
    middleArray.push(array[(array.length - 1) / 2]);
    return middleArray;
  } else if (array.length % 2 === 0) {
    //for even numbers we need to return two numbers
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[array.length / 2]);
    return middleArray;
  }
};

console.log(middle([1,2,3,4,5,6]));
assertArraysEqual(middle([1,2,3,4,5,6]), [ 3, 4 ]);
assertArraysEqual(middle([1,2,3,4,5]), [ 3 ]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);