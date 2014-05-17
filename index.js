'use strict';
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var markdownpdf = require('markdown-pdf');

var paths = {
	html5bp: 'node_modules/gulp-markdown-pdf/node_modules/markdown-pdf/html5bp'
}

module.exports = function (options) {

	if (options.cssPath) {
		var relativePath = path.relative(paths.html5bp, options.cssPath);
		options.cssPath = relativePath;
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-markdown-pdf', 'Streaming not supported'));
			return cb();
		}

		markdownpdf(options)
		.from.string(file.contents.toString())
		.to.buffer(function (err, buffer) {
			if (err) {
				this.emit('error', new gutil.PluginError('gulp-markdown-pdf', err));
			} else {
				file.contents = buffer;
				file.path = gutil.replaceExtension(file.path, '.pdf');
			}

			this.push(file);
			cb()
		}.bind(this));
	});
};
