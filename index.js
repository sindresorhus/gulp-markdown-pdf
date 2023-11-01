import {promisify} from 'node:util';
import markdownpdf from 'markdown-pdf';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpMarkdownPdf(options) {
	return gulpPlugin('gulp-markdown-pdf', async file => {
		file.contents = await promisify(markdownpdf(options).from.string(file.contents.toString()).to.buffer)();
		file.extname = '.pdf';
		return file;
	});
}
