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
 * Read file contents at 'filepath' and convert to js/css/html
 * @param {String} filepath
 * @param {Object} options
 * @param {Function} fn(err, contents)
 */
module.exports = function(filepath, options, fn) {
	if (!fn && 'function' == typeof options) {
		fn = options;
		options = {};
	}
	var content = fs.readFileSync(filepath, 'utf8')
		, extension = path.extname(filepath).slice(1);
	options.filepath = options.filename = filepath;
	compile(extension, content, options, fn);
};

/**
 * Compile 'content'
 * @param {String} extension
 * @param {String} content
 * @param {Object} options
 * @param {Function} fn(err, contents)
 */
function compile (extension, content, options, fn) {
	if (COMPILERS[extension]) {
		require('./lib/' + COMPILERS[extension])(content, options, fn);
	} else {
		fn(null, content);
	}
}