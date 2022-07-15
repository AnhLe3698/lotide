const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁🤪✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤮❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// As soon as the callback returns Truthy value we return the key
// So the first key match will be returned.
const findKey = function(object, callback) {
  for (const keys in object) {
    if (callback(object[`${keys}`])) {
      return keys;
    }
  }
};


let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result, 'noma');

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0);

assertEqual(result2, undefined);


let result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1);

assertEqual(result3, 'Blue Hill');