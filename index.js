'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var markdownpdf = require('markdown-pdf');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-markdown-pdf', 'Streaming not supported'));
			return;
		}

		markdownpdf(options)
		.from.string(file.contents.toString())
		.to.buffer(function (err, buffer) {
			if (err) {
				cb(new gutil.PluginError('gulp-markdown-pdf', err, {fileName: file.path}));
				return;
			}

			file.contents = buffer;
			file.path = gutil.replaceExtension(file.path, '.pdf');
			cb(null, file);
		});
	});
};
