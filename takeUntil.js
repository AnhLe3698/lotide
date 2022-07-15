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


// This will iterate over array until the callback returns a true
const takeUntil = function(array, callback) {
  let resArray = [];
  for (const ele of array) {
    if (!callback(ele)) {
      resArray.push(ele);
    } else {
      return resArray;
    }
  }
  return resArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);