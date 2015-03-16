var assert = require('chai').assert;
var nif = require('..').nif;

describe('nif', function(){
  describe('.validate()', function(){
    it('should return false for invalid NIFs', function(){
    	assert.isFalse(nif.validate(undefined));
    	assert.isFalse(nif.validate(null));
    	assert.isFalse(nif.validate(''));
    	assert.isFalse(nif.validate(987654321));
      assert.isFalse(nif.validate('987654321'));
    });

    it('should return true for valid NIFs', function(){
    	assert.isTrue(nif.validate(500697256));
      assert.isTrue(nif.validate(513204016));
      assert.isTrue(nif.validate('500697256'));
      assert.isTrue(nif.validate('513204016'));
    });
  });

  describe('.generate()', function(){
    it('should generate valid NIFs', function(){
    	assert.isTrue(nif.validate(nif.generate()));
    });
  });
});