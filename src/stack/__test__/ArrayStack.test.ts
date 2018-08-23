import test from 'ava';
import { StackType, StackFactory } from '../Stack';

// ArrayStack number
function stackFromNumbers(stackType:StackType) {
	const stack = new StackFactory().getStack<number>(stackType);

	stack.push(1);
	stack.push(2);
	stack.push(3);
	return stack;
}

test('ArrayStack push number', t => {
	const stack = stackFromNumbers(StackType.ArrayStack);
	t.is(stack.toString(), '1,2,3');
});

test('ArrayStack pop number', t => {
	const stack = stackFromNumbers(StackType.ArrayStack);
	t.is(stack.pop(), 3);
	t.is(stack.pop(), 2);
	t.is(stack.pop(), 1);
	t.is(stack.pop(), undefined);
});

test('ArrayStack peek number', t => {
	const stack = stackFromNumbers(StackType.ArrayStack);
	t.is(stack.peek(), 3);
	t.is(stack.peek(), 3);
});

test('ArrayStack isEmpty number', t => {
	const stack = new StackFactory().getStack<number>(StackType.ArrayStack);
	t.is(stack.isEmpty(), true);
	stack.push(1);
	t.is(stack.isEmpty(), false);
});

interface Engineer {
	name:string,
	salary:number
}
// ArrayStack<Engineer>
function stackFromObjs(stackType:StackType) {
	const stack = new StackFactory().getStack<Engineer>(stackType);
	const CEO = {name: 'Mike', salary: 1000000}
	const CTO = {name: 'Tom', salary: 1048576}
	stack.push(CEO);
	stack.push(CTO);
	return stack;
}

test('ArrayStack push and pop object', t => {
	const stack = stackFromObjs(StackType.ArrayStack);
	t.is(stack.pop().salary, 1048576);
	t.is(stack.pop().name, 'Mike');
	t.is(stack.pop(), undefined);
});

test('ArrayStack peek object', t => {
	const stack = stackFromObjs(StackType.ArrayStack);
	t.is(stack.peek().name, 'Tom');
	t.is(stack.peek().name, 'Tom');
});

test('ArrayStack isEmpty object', t => {
	const stack = new StackFactory().getStack<Engineer>(StackType.ArrayStack);
	t.is(stack.isEmpty(), true);
	const CEO = {name: 'Mike', salary: 1000000}
	stack.push(CEO);
	t.is(stack.isEmpty(), false);
});
