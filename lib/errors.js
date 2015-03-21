function InvalidArgumentError(message) {
  this.name = 'InvalidArgumentError';
  this.message = message || 'Invalid Argument';
}

InvalidArgumentError.prototype = Object.create(Error.prototype);
InvalidArgumentError.prototype.constructor = InvalidArgumentError;

module.exports = {
	InvalidArgumentError: InvalidArgumentError
};