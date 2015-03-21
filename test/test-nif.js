var assert = require('chai').assert;
var nif = require('..').nif;

describe('nif', function() {
  describe('.validate()', function() {
    it('should return false for NIF with invalid type/size', function() {
      assert.isFalse(nif.validate(undefined));
      assert.isFalse(nif.validate(null));
      assert.isFalse(nif.validate(''));
      assert.isFalse(nif.validate(12345));
      assert.isFalse(nif.validate('1000000021'));
      assert.isFalse(nif.validate('12345'));
    });

    it('should return false for NIF with invalid check digit', function() {
      assert.isFalse(nif.validate('987654321'));
    });

    it('should return false for NIF with correct check digit but invalid prefix', function() {
      assert.isFalse(nif.validate('434374580'));
    });

    it('should return false for personal NIF when validating company NIF', function() {
      assert.isFalse(nif.validate('348013191', 'company'));
    });

    it('should return false for company NIF when validating personal NIF', function() {
      assert.isFalse(nif.validate('513204016', 'personal'));
    });

    it('should return true for valid NIF', function() {
      assert.isTrue(nif.validate('513204016'));
    });
  });

  describe('.generate()', function() {
    it('should generate valid NIF', function() {
    	assert.isTrue(nif.validate(nif.generate()));
    });
  });
});