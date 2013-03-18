var jade = require('jade')
	, extend = require('lodash').extend
	, SETTINGS = {
			client: false,
			compileDebug: false,
			pretty: true
	};

/**
 * Compile 'data'
 * @param {String} data
 * @param {Ojbect} options
 * @param {Function} fn(err, compiled)
 */
module.exports = function(data, options, fn) {
	jade.render(data, extend({}, SETTINGS, options), function(err, html) {
		if (err) fn(err, '', data);
		else fn(null, html, data);
	});
};
