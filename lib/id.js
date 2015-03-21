var util = require('./util');

function checkDigit(value) {
  var sum = 0;
  var len = value.length;

  for (var i = 0; i < len; i++) {
    sum += value[i] * (len + 1 - i);
  }

  var mod = sum % 11;
  return '' + ((mod === 0 || mod === 1) ? 0 : 11 - mod);
}

function generate(prefix) {
  var value = util.pad(Math.floor(Math.random() * 99999999), 8);

  if (prefix) {
    value = prefix + value.slice(prefix.length, value.length);
  }

  return value + checkDigit(value);
}

function validate(value) {
  if(!value || value.length !== 9 || isNaN(parseInt(value))) {
    return false;
  }

  return checkDigit(value.slice(0, 8)) === value[8];
}

module.exports = {
  generate: generate,
  validate: validate
};