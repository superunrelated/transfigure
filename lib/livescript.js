var livescript = require('LiveScript')
	, extend = require('./extend')
	, SETTINGS = {
			bare: true
	};

/**
 * Compile 'data'
 * @param {String} data
 * @param {Object} options
 * @param {Function} fn(err, compiled)
 */
module.exports = function(data, options, fn) {
	try {
		// Compile without function wrapper
		var compiled = livescript.compile(data, extend(SETTINGS, options));
		fn(null, compiled);
	} catch (err) {
		fn(err, '');
	}
};
