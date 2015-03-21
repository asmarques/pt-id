var assert = require('chai').assert;
var bi = require('..').bi;

describe('bi', function() {
  describe('.validate()', function() {
    it('should return false for BI id with invalid type/size', function() {
      assert.isFalse(bi.validate(undefined));
      assert.isFalse(bi.validate(null));
      assert.isFalse(bi.validate(''));
      assert.isFalse(bi.validate(12345));
      assert.isFalse(bi.validate('1000000021'));
      assert.isFalse(bi.validate('12345'));
    });

    it('should return false for BI id with invalid check digit', function() {
      assert.isFalse(bi.validate('987654321'));
    });

    it('should return true for valid BI id', function() {
      assert.isTrue(bi.validate('100000002'));
    });
  });

  describe('.generate()', function(){
    it('should generate valid BI id', function() {
    	assert.isTrue(bi.validate(bi.generate()));
    });
  });
});