const assert = require("assert");
const isPalindromePossible = require("./index");

describe("Can Palindrome", function() {
  it("Should be palindromes by swapping 2 letters", function(done) {
    // Positives
    assert.equal(isPalindromePossible("bba"), true);
    assert.equal(isPalindromePossible("abcdedcba"), true);
    assert.equal(isPalindromePossible("bdababd"), true);

    // Negatives
    assert.equal(isPalindromePossible("gcagac"), false);
    assert.equal(isPalindromePossible("ab"), false);

    done();
  });
});
