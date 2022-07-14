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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[`${sentence[i]}`] === undefined) {
      results[`${sentence[i]}`] = [i];
    } else {
      results[`${sentence[i]}`].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello")['h'], [0]);
assertArraysEqual(letterPositions("hello")['l'], [2, 3]);