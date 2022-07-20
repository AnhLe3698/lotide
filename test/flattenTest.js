let flatten = require('../flatten');
let assert = require('chai').assert;
console.log(flatten([1, 2, [3, 4], 5, [6]]));

describe("#Flatten", () => {
  it('The array should equal [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("The array should equal ['tree', 'branch', 'house', 'woodpecker']", () => {
    assert.deepEqual(flatten(['tree', ['branch', 'house'], 'woodpecker']), ['tree', 'branch', 'house', 'woodpecker']);
  });
});

