const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment.js');

describe(' Hooks ', function() {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Should test sendPaymentRequestToAPI with 100, and 20', function() {
    // Calling the function under test
    sendPaymentRequestToAPI(100, 20);
    // Assertions
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('Should test sendPaymentRequestToAPI with 10, and 10', function() {
    // Calling the function under test
    sendPaymentRequestToAPI(10, 10);
    // Assertionsnpm test 5-payment.test.js
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
})
