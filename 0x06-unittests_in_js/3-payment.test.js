const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function() {
  const spyUtilsfunc = sinon.spy(Utils, 'calculateNumber');

  afterEach(function() {
    sinon.restore();
  });

  it('Should spy on Utils.calculateNumber', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spyUtilsfunc.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spyUtilsfunc.returned(120)).to.be.true;
    expect(spyUtilsfunc.threw()).to.be.false;
  })
});
