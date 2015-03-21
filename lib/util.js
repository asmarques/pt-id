function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pad(value, length) {
  var result = value + '';

  while (result.length < length) {
    result = '0' + result;
  }

  return result;
}

module.exports = {
  pad: pad,
  getRandomElement: getRandomElement
};