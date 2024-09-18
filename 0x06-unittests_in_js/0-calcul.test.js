/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calcul = require('./0-calcul');

describe('calcul', () => {
  describe('calculateNumber', () => {
    it('two whole numbers', () => {
      assert.strictEqual(calcul(1, 3), 4);
    });
    it('two decimal numbers', () => {
      assert.strictEqual(calcul(1.2, 3.4), 4);
    });
    it('two negative numbers', () => {
      assert.strictEqual(calcul(-1, -3), -4);
    });
    it('two negative decimal numbers', () => {
      assert.strictEqual(calcul(-1.2, -3.4), -4);
    });
    it('one whole number and one decimal number', () => {
      assert.strictEqual(calcul(1, 3.4), 4);
    });
    it('one whole number and one negative number', () => {
      assert.strictEqual(calcul(1, -3), -2);
    });
    it('one decimal number and one negative number', () => {
      assert.strictEqual(calcul(1.2, -3), -2);
    });
    it('two zeroes', () => {
      assert.strictEqual(calcul(0, 0), 0);
    });
    it('one zero and one whole number', () => {
      assert.strictEqual(calcul(0, 3), 3);
    });
    it('one zero and one decimal number', () => {
      assert.strictEqual(calcul(0, 3.4), 3);
    });
    it('one zero and one negative number', () => {
      assert.strictEqual(calcul(0, -3), -3);
    });
    it('one zero and one negative decimal number', () => {
      assert.strictEqual(calcul(0, -3.4), -3);
    });
    it('rounding up decimals', () => {
      assert.strictEqual(calcul(1.5, 3.5), 6);
    });
    it('rounding up a decimal and a whole number', () => {
      assert.strictEqual(calcul(1.5, 3), 5);
    });
  });
});
