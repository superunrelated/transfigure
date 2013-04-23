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
		transfigure(path.resolve('foo.js'), fs.readFileSync(path.resolve('foo.js'), 'utf8'), function(err, content) {
			done();
		});
	});
	it('should accept a .js file path and return JS content', function(done) {
		transfigure(path.resolve('foo.js'), fs.readFileSync(path.resolve('foo.js'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('foo.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .coffee file path and return JS content', function(done) {
		transfigure(path.resolve('foo.coffee'), fs.readFileSync(path.resolve('foo.coffee'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-coffee.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .ls file path and return JS content', function(done) {
		transfigure(path.resolve('foo.ls'), fs.readFileSync(path.resolve('foo.ls'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-ls.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .handlebars file path and return JS content', function(done) {
		transfigure(path.resolve('foo.handlebars'), fs.readFileSync(path.resolve('foo.handlebars'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-handlebars.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .dust file path and return JS content', function(done) {
		transfigure(path.resolve('foo.dust'), fs.readFileSync(path.resolve('foo.dust'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-dust.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .css file path and return CSS content', function(done) {
		transfigure(path.resolve('foo.css'), fs.readFileSync(path.resolve('foo.css'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('foo.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .styl file path and return CSS content', function(done) {
		transfigure(path.resolve('foo.styl'), fs.readFileSync(path.resolve('foo.styl'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-stylus.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .less file path and return CSS content', function(done) {
		transfigure(path.resolve('foo.less'), fs.readFileSync(path.resolve('foo.less'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-less.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .html file path and return HTML content', function(done) {
		transfigure(path.resolve('foo.html'), fs.readFileSync(path.resolve('foo.html'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('foo.html'), 'utf8'));
			done();
		});
	});
	it('should accept a .jade file path and return HTML content', function(done) {
		transfigure(path.resolve('foo.jade'), fs.readFileSync(path.resolve('foo.jade'), 'utf8'), function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-jade.html'), 'utf8'));
			done();
		});
	});
	it('should accept a .twig file path and return HTML content', function(done) {
		transfigure(path.resolve('foo.twig'), fs.readFileSync(path.resolve('foo.twig'), 'utf8'), {heading:'Cats cats cats!'}, function(err, content) {
			should.not.exist(err);
			content.should.eql(fs.readFileSync(path.resolve('compiled/foo-twig.html'), 'utf8'));
			done();
		});
	});
	it('should return an error when compiling a malformed file', function(done) {
		transfigure(path.resolve('foo-bad.coffee'), fs.readFileSync(path.resolve('foo.coffee'), 'utf8'), function(err, content) {
			should.exist(err);
			done();
		});
	});
});