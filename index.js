'use strict';
const through = require('through2');
const markdownpdf = require('markdown-pdf');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj((file, enc, cb) => {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-markdown-pdf', 'Streaming not supported'));
			return;
		}

		markdownpdf(options)
			.from.string(file.contents.toString())
			.to.buffer((error, buffer) => {
				if (error) {
					cb(new PluginError('gulp-markdown-pdf', error, {fileName: file.path}));
					return;
				}

				file.contents = buffer;
				file.extname = '.pdf';
				cb(null, file);
			});
	});
};
