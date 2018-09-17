import test from 'ava';

import { LinkedList } from '../LinkedList';

function linkedListFromNumbers(nums:number[]) {
  const linkedList = new LinkedList();
  for (const number of nums) {
    linkedList.addLast(number);
  }
  return linkedList;
}

test('LinkedList should add number', t => {
  const nums = [1, 2, 3];
  const linkedList = linkedListFromNumbers(nums);
  t.is(linkedList.toString(), '1,2,3');
});

test('LinkedList should removeLast number', t => {
  const nums = [1, 2, 3];
  const linkedList = linkedListFromNumbers(nums);
  t.is(linkedList.removeFirst(), 1);
  t.is(linkedList.toString(), '2,3');
  t.is(linkedList.removeLast(), 3);
  t.is(linkedList.toString(), '2');
  t.is(linkedList.removeLast(), 2);
  t.is(linkedList.toString(), '');
  t.is(linkedList.removeLast(), undefined);
});

test('LinkedList should get number', t => {
  const nums = [1, 2, 3];
  const queue = linkedListFromNumbers(nums);
  t.is(queue.getFirst(), 1);
  t.is(queue.getLast(), 3);
});

test('LinkedList is Empty', t => {
  const nums = [1, 2];
  const linkedList = linkedListFromNumbers(nums);
  linkedList.removeFirst();
  t.is(linkedList.isEmpty(), false);
  linkedList.removeFirst();
  t.is(linkedList.isEmpty(), true);
});
