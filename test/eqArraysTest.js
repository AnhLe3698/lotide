const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("The two arrays are equal and should return true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("The two arrays are equal and should return true", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("The two arrays are not equal and should return false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("The two arrays are not equal and should return false", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("The two nested arrays are not equal and should return false", () => {
    assert.strictEqual(eqArrays([1,2,3,[4,6]], [1,2,3,[4,7]]), false);
  });
  it("The two nested arrays are not equal and should return true", () => {
    assert.strictEqual(eqArrays([1,[2,3],[4,6]], [1,[2,3],[4,6]]), true);
  });
});