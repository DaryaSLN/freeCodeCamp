// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #13 in the Strings suite, 
// change each assert to either assert.isString or assert.isNotString to make the 
// test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// #13
    test('#isString, #isNotString', function () {
      assert.isNotString(Math.sin(Math.PI / 4), 'A float is not a string');
      assert.isString(process.env.PATH, 'An env variable is a string (or undefined)');
      assert.isString(JSON.stringify({ type: 'object' }), 'JSON is a string');
    });