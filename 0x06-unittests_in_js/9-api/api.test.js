const request = require('request');
const { expect } = require('chai');

describe('Basic Integration testing', function() {
  it('Should test the cart page when id is a number', function(done) {
    request('http://localhost:7865/cart/12', (error, response, body) => {

      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('Payment methods for cart 12');

      done();
    });
  });

  it('Should test the cart page when id is not a number', function(done) {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(404);

      done();
    });
  });
});
