import test from 'ava';
import pEvent from 'p-event';
import Vinyl from 'vinyl';
import m from '.';

test(async t => {
	const stream = m();
	const promise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		path: 'fixture.md',
		contents: Buffer.from('*foo*')
	}));

	const file = await promise;
	t.is(file.relative, 'fixture.pdf');
	t.regex(file.contents.toString(), /%PDF/);
});
