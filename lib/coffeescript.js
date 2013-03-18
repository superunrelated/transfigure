var coffee = require('coffee-script')
	, extend = require('lodash').extend
	, SETTINGS = {
			bare: true
	};

/**
 * Compile 'data'
 * @param {String} data
 * @param {String} options
 * @param {Function} fn(err, compiled)
 */
module.exports = function(data, options, fn) {
	try {
		// Compile without function wrapper
		var compiled = coffee.compile(data, extend({}, SETTINGS, options));
		fn(null, compiled, data);
	} catch (err) {
		fn(err, '', data);
	}
};
