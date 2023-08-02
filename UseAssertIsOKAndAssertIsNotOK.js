// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #3 in the Basic Assertions suite, 
// change each assert to either assert.isOk() or assert.isNotOk() to make the test pass 
// (should evaluate to true). Do not alter the arguments passed to the asserts.

// #3
    test('#isOk, #isNotOk', function () {
      assert.isNotOk(null, 'null is falsey');
      assert.isOk("I'm truthy", 'A string is truthy');
      assert.isOk(true, 'true is truthy');
    });