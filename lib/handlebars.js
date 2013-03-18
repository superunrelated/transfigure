var handlebars = require('handlebars')
	, extend = require('lodash').extend
	, SETTINGS = {
			simple: true
	};

	/**
	 * Compile 'data'
	 * @param {String} data
	 * @param {Object} options
	 * @param {Function} fn(err, compiled)
	 */
module.exports = function(data, options, fn) {
	try {
		var compiled = handlebars.precompile(data, extend({}, SETTINGS, options));
		fn(null, 'module.exports = Handlebars.template(' + compiled + ');', data);
	} catch (err) {
		fn(err, '', data);
	}
};
