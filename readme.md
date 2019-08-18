# gulp-markdown-pdf [![Build Status](https://travis-ci.org/sindresorhus/gulp-markdown-pdf.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-markdown-pdf)

> Markdown to PDF with [`markdown-pdf`](https://github.com/alanshaw/markdown-pdf)

*Issues with the output should be reported on the `markdown-pdf` [issue tracker](https://github.com/alanshaw/markdown-pdf/issues).*


## Install

```
$ npm install --save-dev gulp-markdown-pdf
```


## Usage

```js
const gulp = require('gulp');
const markdownPdf = require('gulp-markdown-pdf');

exports.default = () => (
	gulp.src('intro.md')
		.pipe(markdownPdf())
		.pipe(gulp.dest('dist'))
);
```


## API

### markdownPdf(options?)

See the `markdown-pdf` [options](https://github.com/alanshaw/markdown-pdf#options).
