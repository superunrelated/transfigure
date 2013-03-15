var transfigure = require('..')
	, path = require('path')
	, fs = require('fs')
	, should = require('should')
	, count = 0;

describe('transfigure', function() {
	before(function() {
		process.chdir('./test/fixtures');
	});
	it('should accept an optional "options" object', function(done) {
		transfigure(path.resolve('foo.js'), function(err, content) {
			done();
		});
	});
	it('should accept a .js file path and return JS content', function(done) {
		transfigure(path.resolve('foo.js'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('foo.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .coffee file path and return JS content', function(done) {
		transfigure(path.resolve('foo.coffee'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-coffee.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .ls file path and return JS content', function(done) {
		transfigure(path.resolve('foo.ls'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-ls.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .handlebars file path and return JS content', function(done) {
		transfigure(path.resolve('foo.handlebars'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-handlebars.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .css file path and return CSS content', function(done) {
		transfigure(path.resolve('foo.css'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('foo.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .styl file path and return CSS content', function(done) {
		transfigure(path.resolve('foo.styl'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-stylus.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .less file path and return CSS content', function(done) {
		transfigure(path.resolve('foo.less'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-less.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .jade file path and return HTML content', function(done) {
		transfigure(path.resolve('foo.jade'), function(err, content) {
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-jade.html'), 'utf8'));
			done();
		});
	});
	it('should return an error when compiling a malformed file', function(done) {
		transfigure(path.resolve('foo-bad.coffee'), function(err, content) {
			should.exist(err);
			done();
		});
	});
});