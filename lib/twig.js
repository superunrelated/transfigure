var twig = require('twig').twig
	, extend = require('lodash').extend
	, SETTINGS = {};

/**
 * Compile 'file' content
 * @param {Object} file
 * @param {Ojbect} options
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {
		file.content = twig({data:file.content}).render(extend({}, SETTINGS, options));
		return fn(null, file);
};
