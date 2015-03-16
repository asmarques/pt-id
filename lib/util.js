function pad(value, length) {
    var result = value + '';

    while (result.length < length) {
    	result = '0' + result;
    }

    return result;
}

module.exports = {
	'pad': pad
};