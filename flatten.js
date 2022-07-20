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

module.exports = flatten;