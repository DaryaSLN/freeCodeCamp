// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #4 in the Basic Assertions suite, 
// change each assert to either assert.isTrue or assert.isNotTrue to make the test pass 
// (should evaluate to true). Do not alter the arguments passed to the asserts.

// #4
    test('#isTrue, #isNotTrue', function () {
      assert.isTrue(true, 'true is true');
      assert.isTrue(!!'double negation', 'Double negation of a truthy value is true');
      assert.isNotTrue({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
    });