# gulp-markdown-pdf

> Markdown to PDF with [`markdown-pdf`](https://github.com/alanshaw/markdown-pdf)

*Issues with the output should be reported on the `markdown-pdf` [issue tracker](https://github.com/alanshaw/markdown-pdf/issues).*

## Install

```sh
npm install --save-dev gulp-markdown-pdf
```

## Usage

```js
import gulp from 'gulp';
import markdownPdf from 'gulp-markdown-pdf';

export default () => (
	gulp.src('intro.md')
		.pipe(markdownPdf())
		.pipe(gulp.dest('dist'))
);
```

## API

### markdownPdf(options?)

See the `markdown-pdf` [options](https://github.com/alanshaw/markdown-pdf#options).
