const assert = require("assert");
const anagram = require("./index");

describe("Anagram", function() {
  it("Should find all anagrams in given sentence", function(done) {
    const sentence = "Mary is in the army and codes with many coeds";

    const results = anagram(sentence);

    assert.equal(results.length, 4);
    assert.equal(results.includes("Mary"), true);
    assert.equal(results.includes("army"), true);
    assert.equal(results.includes("codes"), true);
    assert.equal(results.includes("coeds"), true);

    done();
  });
});
