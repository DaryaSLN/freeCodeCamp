// DECRIPTION:
// Within tests/2_functional-tests.js, alter the 'Send {surname: "da Verrazzano"}' 
// test (// #4) and use the put and send methods to test the '/travellers' endpoint.
// Follow the assertion order above - we rely on it. Also, be sure to remove assert.fail() once complete.

    // #4
    test('Send {surname: "da Verrazzano"}', function (done) {
      chai
      .request(server)
      .keepOpen()
      .put('/travellers')
      .send({surname: 'da Verrazzano'})
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json', 'The type should be json');
        assert.equal(res.body.name, 'Giovanni', 'The body.name should be "Giovanni"');
        assert.equal(res.body.surname, 'da Verrazzano', 'The body.surname should be "da Verrazzano"');
        done();
      });
    });