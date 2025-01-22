const getPaymentTokenFromAPI = require('./6-payment_token.js');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('Should test the result of getPaymentTokenFromAPI(true)', function(done){
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API' });
	done();
      })
  })
})
