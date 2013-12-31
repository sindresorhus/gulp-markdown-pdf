'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var markdownpdf = require('./index');

it('should compile Markdown to PDF', function (cb) {
	var stream = markdownpdf();

	stream.on('data', function (file) {
		assert.equal(file.relative, 'fixture.pdf');
		assert(/%PDF/.test(file.contents.toString()));
		cb();
	});

	stream.write(new gutil.File({
		path: 'fixture.md',
		contents: new Buffer('*foo*')
	}));
});
