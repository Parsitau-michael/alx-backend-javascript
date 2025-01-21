const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', function() {
  it('test type = SUM', function() {
    const actualOut = calculateNumber('SUM', 1.4, 0.9);
    const expectedOut = 2;
    assert.equal(actualOut, expectedOut);
  });

  it('test type = SUBTRACT', function() {
    const actualOut = calculateNumber('SUBTRACT', -1.4, 0.9);
    const expectedOut = -2;
    assert.equal(actualOut, expectedOut);
  });

  it('test type = DIVIDE', function() {
    const actualOut = calculateNumber('DIVIDE', 10.4, 1.9);
    const expectedOut = 5;
    assert.equal(actualOut, expectedOut);
  });

  it('test type = DIVIDE with rounded b = 0', function() {
    const actualOut = calculateNumber('DIVIDE', 10.4, 0.4);
    const expectedOut = 'Error';
    assert.equal(actualOut, expectedOut);
  });
});
