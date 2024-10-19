const assert = require('assert');
const calculateNumer = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 4', () => {
      assert.strictEqual(calculateNumer('SUM', 1, 3), 4);
    });
    it('should return 6', () => {
      assert.strictEqual(calculateNumer('SUM', 1.5, 3.5), 6);
    });
    it('should return 5', () => {
      assert.strictEqual(calculateNumer('SUM', 1.5, 3), 5);
    });
    it('should return 4', () => {
      assert.strictEqual(calculateNumer('SUM', 1.2, 3.4), 4);
    });
    it('should return -4', () => {
      assert.strictEqual(calculateNumer('SUM', -1, -3), -4);
    });
    it('should return -4', () => {
      assert.strictEqual(calculateNumer('SUM', -1.2, -3.4), -4);
    });
    it('should return -5', () => {
      assert.strictEqual(calculateNumer('SUM', -1.6, -2.7), -5);
    });
  });
  describe('sUBTRACT', () => {
    it('should return -2', () => {
      assert.strictEqual(calculateNumer('SUBTRACT', 1, 3), -2);
    });
    it('should return -2', () => {
      assert.strictEqual(calculateNumer('SUBTRACT', 1.5, 3.5), -2);
    });
    it('should return -1', () => {
      assert.strictEqual(calculateNumer('SUBTRACT', 1.5, 3), -1);
    });
    it('should return -2', () => {
      assert.strictEqual(calculateNumer('SUBTRACT', 1.2, 3.4), -2);
    });
    it('should return 2', () => {
      assert.strictEqual(calculateNumer('SUBTRACT', -1, -3), 2);
    });
    it('should return 2', () => {
      assert.strictEqual(calculateNumer('SUBTRACT', -1.2, -3.4), 2);
    });
  });
  describe('dIVIDE', () => {
    it('should return 0.5', () => {
      assert.strictEqual(calculateNumer('DIVIDE', 1, 2), 0.5);
    });
    it('should return 0.5', () => {
      assert.strictEqual(calculateNumer('DIVIDE', 1.5, 3.5), 0.5);
    });
    it('should return 1', () => {
      assert.strictEqual(calculateNumer('DIVIDE', 1.5, 2), 1);
    });
    it('should return error', () => {
      assert.strictEqual(calculateNumer('DIVIDE', 1.2, 0), 'Error');
    });
  });
});
