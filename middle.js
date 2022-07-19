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

module.exports = middle;