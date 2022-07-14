const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁🤪✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤮❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countObject = {};
  // for..in loops for objects, and for...of for arrays
  for (const item in itemsToCount) {
    let counter = 0;
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i] === item) {
        counter ++;
      }
    } // The following condtional will add the key:value to
    // object if and only if the value is greater than zero
    // and the value of the key is true
    if (itemsToCount[`${item}`] && counter !== 0) {
      countObject[`${item}`] = counter;
    }
  }
  
  return countObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);