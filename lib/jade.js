var jade = require('jade')
	, extend = require('lodash').extend
	, SETTINGS = {
			client: false,
			compileDebug: false,
			pretty: true
	};

/**
 * Compile 'file' content
 * @param {Object} file
 * @param {Ojbect} options
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {
	jade.render(file.content, extend({}, SETTINGS, options), function(err, html) {
		if (err) return fn(err, file);
		file.content = html;
		return fn(null, file);
	});
};
