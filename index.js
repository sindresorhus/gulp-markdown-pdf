'use strict';
const gutil = require('gulp-util');
const through = require('through2');
const markdownpdf = require('markdown-pdf');

module.exports = options => {
	return through.obj((file, enc, cb) => {
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
			.to.buffer((err, buffer) => {
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
