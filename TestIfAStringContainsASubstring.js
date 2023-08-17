// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #14 in the Strings suite, 
// change each assert to either assert.include or assert.notInclude to make the test 
// pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// #14
    test('String #include, #notInclude', function () {
      assert.include('Arrow', 'row', "'Arrow' contains 'row'");
      assert.notInclude('dart', 'queue', "But 'dart' doesn't contain 'queue'");
    });