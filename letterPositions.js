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

module.exports = letterPositions;