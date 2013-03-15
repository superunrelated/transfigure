var stylus = require('stylus')
	, extend = require('./extend')
	, SETTINGS = {};

/**
 * Compile 'data'
 * @param {String} data
 * @param {Object} options
 * @param {Function} fn(err, compiled)
 */
module.exports = function(data, options, fn) {
	stylus.render(data, extend(SETTINGS, options), function(err, css) {
		if (err) fn(err, '');
		else fn(null, css);
	});
};
