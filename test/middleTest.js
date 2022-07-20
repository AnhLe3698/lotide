//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe(("#middle"), () => {
  it("returns [3,4]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [ 3, 4 ]);
  });
  it("returns []", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});
/*
console.log(middle([1,2,3,4,5,6]));
assertArraysEqual(middle([1,2,3,4,5,6]), [ 3, 4 ]);
assertArraysEqual(middle([1,2,3,4,5]), [ 3 ]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
*/