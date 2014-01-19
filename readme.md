# [gulp](http://gulpjs.com)-markdown-pdf [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-markdown-pdf.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-markdown-pdf)

> Markdown to PDF with [markdown-pdf](https://github.com/alanshaw/markdown-pdf)

*Issues with the output should be reported on the marked [issue tracker](https://github.com/alanshaw/markdown-pdf/issues).*


## Install

Install with [npm](https://npmjs.org/package/gulp-markdown-pdf)

```
npm install --save-dev gulp-markdown-pdf
```


## Example

```js
var gulp = require('gulp');
var markdownpdf = require('gulp-markdown-pdf');

gulp.task('default', function () {
	gulp.src('intro.md')
		.pipe(markdownpdf())
		.pipe(gulp.dest('dist'));
});
```


## API

### markdownpdf(options)

See the markdown-pdf [options](https://github.com/alanshaw/markdown-pdf#options).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
