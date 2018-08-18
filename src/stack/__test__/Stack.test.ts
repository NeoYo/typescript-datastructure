import { StackFactory, StackType } from '../Stack';

export function stackFromNumbers(stackType:StackType) {
	const stack = new StackFactory().getStack(stackType);

	stack.push(1);
	stack.push(2);
	stack.push(3);
	return stack;
}
