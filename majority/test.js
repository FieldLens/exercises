const assert = require("assert");
const findMajority = require("./index");

describe("Majority Element", function() {
  it("Should find the majority element", function(done) {
    assert.equal(findMajority([1]), 1);
    assert.equal(findMajority([1, 2]), null);
    assert.equal(findMajority([1, 2, 3]), null);
    assert.equal(findMajority([1, 1, 1, 2, 3]), 1);
    assert.equal(findMajority([1, 1, 2, 2, 3]), null);
    assert.equal(findMajority([1, 1, 2, 1, 3, 1, 3]), 1);

    done();
  });
});
