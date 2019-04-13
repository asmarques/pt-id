module.exports = {
  nif: require('./lib/nif.js'),
  bi: require('./lib/bi.js'),
  cc: require('./lib/cc.js'),
  InvalidArgumentError: require('./lib/errors.js').InvalidArgumentError
}