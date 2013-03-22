var less = require('less')
	, extend = require('lodash').extend
	, SETTINGS = {};

/**
 * Compile 'file' content
 * @param {Object} file
 * @param {Object} options
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {
	var parser = new less.Parser(extend({}, SETTINGS, options));
	parser.parse(file.content, function(err, tree) {
		if (err) return fn(err, file);
		file.content = tree.toCSS();
		return fn(null, file);
	});
};
