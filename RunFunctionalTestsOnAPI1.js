// DECRIPTION:
// Within tests/2_functional-tests.js, alter the 'Test GET /hello with no name' 
// test (// #1) to assert the status and the text of the response to make the test pass. 
// Do not alter the arguments passed to the asserts.

// There should be no URL query. Without a name URL query, the endpoint responds with hello Guest.

// #1
    test('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello Guest');
          done();
        });
    });