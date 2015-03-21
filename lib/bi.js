var id = require('./id');

/** 
 * Generate a random Civil Identification Number (Número de Identificação Civil / Bilhete de Identidade).
 *
 * @returns {string} A valid number including check digit.
 */
function generate() {
  return id.generate();
}

/** 
 * Validate a given Civil Identification Number (Número de Identificação Civil / Bilhete de Identidade).
 *
 * @param {string} number - the number to validate.
 *
 * @returns {boolean} True if the given number is valid.
 */
function validate(number) {
  return id.validate(number);
}

module.exports = {
  validate: validate,
  generate: generate
};