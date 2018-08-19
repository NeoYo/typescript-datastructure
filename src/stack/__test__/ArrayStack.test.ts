import test from 'ava';
import { StackType, StackFactory } from '../Stack';

function stackFromNumbers(stackType:StackType) {
	const stack = new StackFactory().getStack(stackType);

	stack.push(1);
	stack.push(2);
	stack.push(3);
	return stack;
}

test('ArrayStack should push number', t => {
	const stack = stackFromNumbers(StackType.ArrayStack);
	t.is(stack.toString(), '1,2,3');
});

test('ArrayStack should pop number', t => {
	const stack = stackFromNumbers(StackType.ArrayStack);
	t.is(stack.pop(), 3);
	t.is(stack.pop(), 2);
	t.is(stack.pop(), 1);
});
