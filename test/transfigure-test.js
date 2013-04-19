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
		transfigure({filepath: path.resolve('foo.js'), extension:'js', content: fs.readFileSync(path.resolve('foo.js'), 'utf8')}, function(err, file) {
			done();
		});
	});
	it('should accept a .js file path and return JS content', function(done) {
		transfigure({filepath: path.resolve('foo.js'), extension:'js', content: fs.readFileSync(path.resolve('foo.js'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('foo.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .coffee file path and return JS content', function(done) {
		transfigure({filepath: path.resolve('foo.coffee'), extension:'coffee', content: fs.readFileSync(path.resolve('foo.coffee'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('compiled/foo-coffee.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .ls file path and return JS content', function(done) {
		transfigure({filepath: path.resolve('foo.ls'), extension:'ls', content: fs.readFileSync(path.resolve('foo.ls'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('compiled/foo-ls.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .handlebars file path and return JS content', function(done) {
		transfigure({filepath: path.resolve('foo.handlebars'), extension:'handlebars', content: fs.readFileSync(path.resolve('foo.handlebars'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('compiled/foo-handlebars.js'), 'utf8'));
			done();
		});
	});
	it('should accept a .css file path and return CSS content', function(done) {
		transfigure({filepath: path.resolve('foo.css'), extension:'css', content: fs.readFileSync(path.resolve('foo.css'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('foo.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .styl file path and return CSS content', function(done) {
		transfigure({filepath: path.resolve('foo.styl'), extension:'styl', content: fs.readFileSync(path.resolve('foo.styl'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('compiled/foo-stylus.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .less file path and return CSS content', function(done) {
		transfigure({filepath: path.resolve('foo.less'), extension:'less', content: fs.readFileSync(path.resolve('foo.less'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('compiled/foo-less.css'), 'utf8'));
			done();
		});
	});
	it('should accept a .html file path and return HTML content', function(done) {
		transfigure({filepath: path.resolve('foo.html'), extension:'html', content: fs.readFileSync(path.resolve('foo.html'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('foo.html'), 'utf8'));
			done();
		});
	});
	it('should accept a .jade file path and return HTML content', function(done) {
		transfigure({filepath: path.resolve('foo.jade'), extension:'jade', content: fs.readFileSync(path.resolve('foo.jade'), 'utf8')}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('compiled/foo-jade.html'), 'utf8'));
			done();
		});
	});
	it('should accept a .twig file path and return HTML content', function(done) {
		transfigure({filepath: path.resolve('foo.twig'), extension:'twig', content: fs.readFileSync(path.resolve('foo.twig'), 'utf8')}, {heading:'Cats cats cats!'}, function(err, file) {
			should.not.exist(err);
			file.content.should.eql(fs.readFileSync(path.resolve('compiled/foo-twig.html'), 'utf8'));
			done();
		});
	});
	it('should return an error when compiling a malformed file', function(done) {
		transfigure({filepath: path.resolve('foo-bad.coffee'), extension:'coffee', content: fs.readFileSync(path.resolve('foo.coffee'), 'utf8')}, function(err, file) {
			should.exist(err);
			done();
		});
	});
});