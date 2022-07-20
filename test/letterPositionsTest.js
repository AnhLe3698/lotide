let letterPositions = require('../letterPositions');
let assert = require('chai').assert;

describe("#letterPositions", () => {
  it("The posistion of h in hello should return 0", () => {
    assert.deepEqual(letterPositions("hello")['h'], [0]);
  });
  it("The posistion of l in hello should return [2,3]", () => {
    assert.deepEqual(letterPositions("hello")['l'], [2, 3]);
  });
});