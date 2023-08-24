// DECRIPTION:
// Within tests/2_functional-tests.js, alter the 'Send {surname: "Colombo"}' test 
// (// #3) and use the put and send methods to test the '/travellers' endpoint.
// Follow the assertion order above - we rely on it. Also, be sure to remove assert.fail() once complete.

// #3
    test('Send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')
        .send({surname : 'Colombo'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json', 'The type should be json');
          assert.equal(res.body.name, 'Cristoforo', 'The body.name should be "Christoforo"');
          assert.equal(res.body.surname, 'Colombo', 'The body.surname should be "Colombo"');
          done();
        });
    });