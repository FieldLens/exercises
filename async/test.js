var assert = require("assert");
var async = require("./");

describe("async", function() {
  describe("has a sequence method that", function() {
    it("maps over the functions and returns the correct order", function(done) {
      var fun1 = function(cb) {
        setTimeout(() => cb(1), 50);
      };

      var fun2 = function(cb, data) {
        setTimeout(() => cb(2), 10);
      };

      var fun3 = function(cb, data) {
        cb(3);
      };

      async
        .map([fun1, fun2, fun3])
        .then(results => {
          assert.deepEqual(results, [1, 2, 3]);
          done();
        })
        .catch(e => {
          done(e);
        });
    });
  });
});
