const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁🤪✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤮❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inObject, string1) {
  for (const keys in inObject) {
    if (inObject[keys] === string1) {
      return keys;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");