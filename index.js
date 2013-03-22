// TODO: source maps

var path = require('path')
	, fs = require('fs')
	, existsSync = fs.existsSync || path.existsSync
	, COMPILERS = {
		'js': '',
		'css': '',
		'html': '',
		'coffee': 'coffeescript',
		'ls': 'livescript',
		'hbs': 'handlebars',
		'handlebars': 'handlebars',
		'styl': 'stylus',
		'less': 'less',
		'jade': 'jade'
	};

/**
 * Convert 'file' contents to js/css/html
 * @param {Object} file {extension, filename, content}
 * @param {Object} [options]
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {
	if (!fn && 'function' == typeof options) {
		fn = options;
		options = {};
	}
	options.filepath = options.filename = file.filepath;
	if (COMPILERS[file.extension]) {
		return require('./lib/' + COMPILERS[file.extension])(file, options, fn);
	} else {
		return fn('no compiler found for ' + options.filepath, file);
	}
};
