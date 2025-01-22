const request = require('request');
const { expect } = require('chai');

describe('Basic Integration testing', function() {
  it('Should test the index page', function(done) {
    request('http://localhost:7865', (error, response, body) => {

      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('Welcome to the payment system');

      done();
    });
  });
});
