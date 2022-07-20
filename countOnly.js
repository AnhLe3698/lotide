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

module.exports = countOnly;