var bi = require('./bi');
var util = require('./util');

var CHAR = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15,
  'G': 16,
  'H': 17,
  'I': 18,
  'J': 19,
  'K': 20,
  'L': 21,
  'M': 22,
  'N': 23,
  'O': 24,
  'P': 25,
  'Q': 26,
  'R': 27,
  'S': 28,
  'T': 29,
  'U': 30,
  'V': 31,
  'W': 32,
  'X': 33,
  'Y': 34,
  'Z': 35,
};

var CHARS = Object.keys(CHAR);

function calculateSum(value) {
  var sum = 0;

  for (var i = value.length - 1; i >= 0; i--) {
    var d = CHAR[value[i]];

    if (d === undefined || (i < 9 && d > 9)) {
      return false;
    }

    if (i % 2 === 0) {
      d *= 2;

      if (d > 9) {
        d -= 9;
      }
    }

    sum += d;
  }

  return sum % 10;
}

/** 
 * Generate a random Citizen's Card (Cartão do Cidadão) Document Number.
 *
 * @returns {string} A valid document number including alpha-numeric version and check digit.
 */
function generate() {
  var number = bi.generate();
  // random 2 char document version
  number += util.getRandomElement(CHARS);
  number += util.getRandomElement(CHARS);
  number += (10 - calculateSum(number)) % 10;
  return number;
}

/** 
 * Validate a given Citizen's Card (Cartão do Cidadão) Document Number.
 *
 * @param {string} number - the document number to validate.
 *
 * @returns {boolean} True if the given document number is valid.
 */
function validate(number) {
  if (typeof number !== 'string' || number.length !== 12) {
    return false;
  }

  return calculateSum(number) === 0;
}

module.exports = {
  validate: validate,
  generate: generate
};