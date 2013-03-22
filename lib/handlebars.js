var handlebars = require('handlebars')
	, extend = require('lodash').extend
	, SETTINGS = {
			simple: true
	};

/**
 * Compile 'file' content
 * @param {Object} file
 * @param {Object} options
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {
	try {
		file.content = 'module.exports = Handlebars.template(' + handlebars.precompile(file.content, extend({}, SETTINGS, options)) + ');';
		return fn(null, file);
	} catch (err) {
		return fn(err, file);
	}
};
