import test from 'ava';
import { StackType } from '../Stack';
import { stackFromNumbers } from './Stack.test';

test('LinkedListStack should push data', t => {
	const stack = stackFromNumbers(StackType.LinkedListStack);
	t.is(stack.toString(), '3,2,1');
});

test('LinkedListStack should pop', t => {
	const stack = stackFromNumbers(StackType.LinkedListStack);
	t.is(stack.pop(), 3);
	t.is(stack.pop(), 2);
	t.is(stack.pop(), 1);
});