import test from 'ava';
import { StackFactory, StackType } from './Stack';

// test('foo', t => {
// 	t.pass();
// });

// test('bar', async t => {
// 	const bar = Promise.resolve('bar');

// 	t.is(await bar, 'bar');
// });

test('StackFactory', async t => {
	const stack = new StackFactory().getStack(StackType.ArrayStack);

	stack.push(1);
	stack.push(2);
	stack.push(3);

	t.is(stack.toString(), '1,2,3');
});