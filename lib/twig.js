var twig = require('twig').twig
  , extend = require('lodash').extend
  , path = require('path')
  , SETTINGS = {};

/**
 * Compile 'file' content
 * @param {Object} file
 * @param {Ojbect} options
 * @param {Function} fn(err, file)
 */
module.exports = function(file, options, fn) {

    var template = twig({
      path: file.filepath,
      base: path.dirname(file.filepath),
      async: false
    });

    file.content = template.render(extend({}, SETTINGS, options));
    return fn(null, file);
};
