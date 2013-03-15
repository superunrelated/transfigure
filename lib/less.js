var less = require('less')
	, extend = require('./extend')
	, SETTINGS = {};

/**
 * Compile 'data'
 * @param {String} data
 * @param {Object} options
 * @param {Function} fn(err, compiled)
 */
module.exports = function(data, options, fn) {
	var parser = new less.Parser(extend(SETTINGS, options));
	parser.parse(data, function(err, tree) {
		if (err) fn(err, '');
		else fn(null, tree.toCSS());
	});
};
