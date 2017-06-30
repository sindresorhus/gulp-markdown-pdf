import test from 'ava';
import gutil from 'gulp-util';
import pEvent from 'p-event';
import m from '.';

test(async t => {
	const stream = m();
	const promise = pEvent(stream, 'data');

	stream.end(new gutil.File({
		path: 'fixture.md',
		contents: Buffer.from('*foo*')
	}));

	const file = await promise;
	t.is(file.relative, 'fixture.pdf');
	t.regex(file.contents.toString(), /%PDF/);
});
