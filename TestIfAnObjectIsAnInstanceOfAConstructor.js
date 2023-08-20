// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #18 in the Objects suite, change each 
// assert to either assert.instanceOf or assert.notInstanceOf to make the test pass 
// (should evaluate to true). Do not alter the arguments passed to the asserts.

// #18
    test('#instanceOf, #notInstanceOf', function () {
      assert.notInstanceOf(myCar, Plane);
      assert.instanceOf(airlinePlane, Plane);
      assert.instanceOf(airlinePlane, Object);
      assert.notInstanceOf(myCar.wheels, String);
    });