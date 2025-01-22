const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function() {
  let stub, spy;

  afterEach(function() {
    sinon.restore();
  });

  beforeEach(() => {
    // stub Utils.calculateNumber to return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');

    // Call the function being tested    
    sendPaymentRequestToApi(100, 20);
  });

  it('Should stub Utils.calculateNumber to return 10', function() {
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  })

  it('Should spy on the logged message', function() {
    expect(spy.calledWith('The total is: 10')).to.be.true;
  })
});
