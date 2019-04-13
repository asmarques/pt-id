var util = require('./util');
var id = require('./id');
var InvalidArgumentError = require('./errors').InvalidArgumentError;

var PREFIXES = {
  personal: ['1', '2', '3'],
  company: ['5'],
  all: ['1', '2', '3', '5', '45', '6', '70', '71', '72', '77', '78', '79', '90', '91', '98', '99']
};

function checkPrefix(nif, prefixes) {
  var matches = false;

  for (var i = 0; i < prefixes.length; i++) {
    if (nif.indexOf(prefixes[i]) === 0) {
      matches = true;
      break;
    }
  }

  return matches;
}

function getPrefixes(type) {
  type = type || 'all';
  var prefix = PREFIXES[type];

  if (prefix === undefined) {
    throw new InvalidArgumentError('Invalid prefix type: ' + type);
  }

  return prefix;
}

/**
 * Generate a random Fiscal Identification Number (Número de Identificação Fiscal).
 *
 * @param {string} type - optional type ('personal' or 'company'), defaults to any.
 *
 * @returns {string} A valid number including check digit.
 */
function generate(type) {
  var prefixes = getPrefixes(type);
  return id.generate(util.getRandomElement(prefixes));
}

/**
 * Validate a Fiscal Identification Number (Número de Identificação Fiscal).
 *
 * @param {string} number - the number to validate.
 * @param {string} type - optional type ('personal' or 'company'), defaults to any.
 *
 * @returns {boolean} True if the given number is valid.
 */
function validate(number, type) {
  var prefixes = getPrefixes(type);
  return id.validate(number) && checkPrefix(number, prefixes);
}

module.exports = {
  validate: validate,
  generate: generate
};