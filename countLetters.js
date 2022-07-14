const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁🤪✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤮❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Our inputs are case sensitive!, only considering capital letters
const countLetters = function(string1) {
  let resultingObject = {};
  for (let i = 0; i < string1.length; i++) {
    // if the letter has not been added, add it
    if (resultingObject[`${string1[i]}`] === undefined) {
      resultingObject[`${string1[i]}`] = 1;
    } else { //otherwise we need increment the object key value
      resultingObject[`${string1[i]}`] += 1;
    }
  }
  return resultingObject;
};

console.log(countLetters('LHL'));
assertEqual(countLetters('LHL')['L'], 2);
assertEqual(countLetters('LHL')['H'], 1);
assertEqual(countLetters('LIGHTHOUSE')['H'], 2);
assertEqual(countLetters('LIGHTHOUSE')['L'], 1);