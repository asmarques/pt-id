var pad = require('./util').pad;

function generate() {
  var nif = pad(Math.floor(Math.random() * 99999999), 8);

  var sum = 0;

  for (var i = 0; i < 8; i++) {
    sum += nif[i] * (9 - i);
  }

  var mod = sum % 11;
  nif += (mod === 0 || mod === 1) ? 0 : 11 - mod;
  return nif;
}

function validate(nif) {
  if (isNaN(parseInt(nif, 10))) {
    return false;
  }

  nif += '';

  if (nif.length !== 9) {
    return false;
  }

  var sum = 0;

  for (var i = 0; i < 8; i++) {
    sum += nif[i] * (9 - i);
  }

  var mod = sum % 11;

  return ((mod === 0 || mod === 1) ? 0 : 11 - mod) === parseInt(nif[8], 10);
}

module.exports = {
  'validate': validate,
  'generate': generate
};