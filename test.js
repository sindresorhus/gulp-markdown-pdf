import test from 'ava';
import pEvent from 'p-event';
import Vinyl from 'vinyl';
import markdownPdf from '.';

test('main', async t => {
	const stream = markdownPdf();
	const promise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		path: 'fixture.md',
		contents: Buffer.from('*foo*')
	}));

	const file = await promise;
	t.is(file.relative, 'fixture.pdf');
	t.regex(file.contents.toString(), /%PDF/);
});
