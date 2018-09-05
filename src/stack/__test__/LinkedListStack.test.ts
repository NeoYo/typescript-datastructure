import test from 'ava';
import { StackType, StackFactory } from '../Stack';

function stackFromNumbers(stackType:StackType) {
  const stack = new StackFactory().getStack(stackType);
	stack.push(1);
	stack.push(2);
	stack.push(3);
	return stack;
}

test('LinkedListStack should push number', t => {
	const stack = stackFromNumbers(StackType.LinkedListStack);
	t.is(stack.toString(), '3,2,1');
});

test('LinkedListStack should pop number', t => {
	const stack = stackFromNumbers(StackType.LinkedListStack);
	t.is(stack.pop(), 3);
	t.is(stack.pop(), 2);
	t.is(stack.pop(), 1);
});
