module.exports = function(obj, options) {
	for (var option in options) {
		obj[option] = options[option];
	}
	return obj;
};