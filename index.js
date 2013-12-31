'use strict';
var map = require('map-stream');
var gutil = require('gulp-util');
var markdownpdf = require('markdown-pdf');

module.exports = function (options) {
	return map(function (file, cb) {
		markdownpdf(options)
		.from.string(file.contents.toString())
		.to.buffer(function (err, buffer) {
			file.contents = buffer;
			file.path = gutil.replaceExtension(file.path, '.pdf');
			cb(null, file);
		});
	});
};
