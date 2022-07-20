let assert = require('chai').assert;
let eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abcd = { a: [1,2,3], b: "2", c: "3" };
const abcde = {b: "2", a: [1,2,3], c: "3" };
const abcdef = {b: "2", a: [1,2,3,4], c: "3" };


describe("#eqObjects", () => {
  it("These two objects are the same and should return true", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("These two objects are not the same and should return false", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("These two objects are the same and should return true", () => {
    assert.strictEqual(eqObjects(abcd, abcde), true);
  });
  it("These two objects are not the same and should return false", () => {
    assert.strictEqual(eqObjects(abcde, abcdef), false);
  });
});