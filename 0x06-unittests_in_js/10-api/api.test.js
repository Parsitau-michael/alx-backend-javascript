const request = require('request');
const { expect } = require('chai');

describe('Basic Integration testing', function() {
  it('Should test the index page', function(done) {
    request('http://localhost:7865/', (error, response, body) => {

      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal('Welcome to the payment system');

      done();
    });
  });

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

  it('Should test the available_payments endpoint', function(done) {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedRes = {
        payment_methods: {
          credit_cards: true,
          paypal: false
	}
      }

      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedRes);

      done();
    });
  });

  it('Should test the /login endpoint', function(done) {
    request.post(
      {
        headers: {'Content-Type': 'application/json'},
        url: 'http://localhost:7865/login',
        json: { "userName": "Betty" },
      },
      (error, response, body) => {

        expect(error).to.be.null;
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal('Welcome Betty');

        done();
      }
    );
  });
});
