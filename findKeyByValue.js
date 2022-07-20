const findKeyByValue = function(inObject, string1) {
  for (const keys in inObject) {
    if (inObject[keys] === string1) {
      return keys;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;