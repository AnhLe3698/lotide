let countOnly = require('../countOnly');
let assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("Jason appears on the list 1 time", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("Karima appears on the list 0 times and should return undefined", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("Fang appears on the list 2 times", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("Agouhanna appears on the list 0 times and should return undefined", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});