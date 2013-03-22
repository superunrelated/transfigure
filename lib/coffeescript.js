var coffee = require('coffee-script')
	, extend = require('lodash').extend
	, SETTINGS = {
			bare: true
	};

/**
 * Compile 'file' content
 * @param {Object} file
 * @param {Object} options
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {
	try {
		// Compile without function wrapper
		file.content = coffee.compile(file.content, extend({}, SETTINGS, options));
		return fn(null, file);
	} catch (err) {
		return fn(err, file);
	}
};
