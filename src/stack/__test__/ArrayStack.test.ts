import test from 'ava';
import { StackType } from '../Stack';
import { stackFromNumbers } from './Stack.test';

test('ArrayStack should push data', t => {
	const stack = stackFromNumbers(StackType.ArrayStack);
	t.is(stack.toString(), '1,2,3');
});

test('ArrayStack should pop', t => {
	const stack = stackFromNumbers(StackType.ArrayStack);
	t.is(stack.pop(), 3);
	t.is(stack.pop(), 2);
	t.is(stack.pop(), 1);
});
