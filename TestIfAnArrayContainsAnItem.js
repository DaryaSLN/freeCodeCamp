// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #12 in the Arrays suite, 
// change each assert to either assert.include or assert.notInclude to make the test 
// pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// #12
    test('Array #include, #notInclude', function () {
      assert.notInclude(winterMonths, 'jul', "It's summer in july...");
      assert.include(backendLanguages, 'javascript', 'JS is a backend language');
    });