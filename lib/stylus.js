var stylus = require('stylus')
	, extend = require('lodash').extend
	, SETTINGS = {};

/**
 * Compile 'file' content
 * @param {Object} file
 * @param {Object} options
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {
	stylus.render(file.content, extend({}, SETTINGS, options), function(err, css) {
		if (err) return fn(err, file);
		file.content = css;
		return fn(null, file);
	});
};
