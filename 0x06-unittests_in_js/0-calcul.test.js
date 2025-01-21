const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function() {
  it('Should sum two floating points', function() {
    const actualRes = calculateNumber(1.1, 3.6);
    const expectedRes = 5;
    assert.equal(actualRes, expectedRes);
  });
});
