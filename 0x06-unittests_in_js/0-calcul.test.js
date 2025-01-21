const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function() {
  it('testing round-off when both arguments are already integers', function() {
    const actualRes = calculateNumber(1, 3);
    const expectedRes = 4;
    assert.equal(actualRes, expectedRes);
  });

  it('testing round-off when both arguments are floating-point numbers', function() {
    const actualRes = calculateNumber(1.1, 3.6);
    const expectedRes = 5;
    assert.equal(actualRes, expectedRes);
  });

  it('testing round-off when one argument is floating-point the other an integer', function() {
    const actualRes = calculateNumber(1.1, 3);
    const expectedRes = 4;
    assert.equal(actualRes, expectedRes);
  });

  it('testing round-off with negative arguments, a floating-point the other an integer', function() {
    const actualRes = calculateNumber(-1.1, -3);
    const expectedRes = -4;
    assert.equal(actualRes, expectedRes);
  });

  it('testing round-off with arguments with very large numbers', function() {
    const actualRes = calculateNumber(0.1, 0.9);
    const expectedRes = 1;
    assert.equal(actualRes, expectedRes);
  });

  it('testing round-off with arguments close to .5', function() {
    const actualRes = calculateNumber(1.4, 2.5);
    const expectedRes = 4;
    assert.equal(actualRes, expectedRes);
  });
});
