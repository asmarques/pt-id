var assert = require('chai').assert;
var cc = require('..').cc;

describe('cc', function() {
  describe('.validate()', function() {
    it('should return false for CC id with invalid type/size', function() {
      assert.isFalse(cc.validate(undefined));
      assert.isFalse(cc.validate(null));
      assert.isFalse(cc.validate(''));
      assert.isFalse(cc.validate(12345));
      assert.isFalse(cc.validate('12345678'));
      assert.isFalse(cc.validate('1234567890123'));
    });

    it('should return false for CC id with invalid check digit', function() {
      assert.isFalse(cc.validate('ABCDEFGHI000'));
    });

    it('should return true for valid CC id', function() {
      assert.isTrue(cc.validate('000000000ZZ4'));
    });
  });

  describe('.generate()', function() {
    it('should generate valid CC id', function() {
      assert.isTrue(cc.validate(cc.generate()));
    });
  });
});