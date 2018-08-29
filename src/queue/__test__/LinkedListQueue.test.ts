import test from 'ava';
import { LinkedListQueue } from '../LinkedListQueue';

function LinkedListQueueFromNumbers(nums:number[]) {
  const queue = new LinkedListQueue();
  for (const number of nums) {
    queue.add(number);
  }
  return queue;
}

test('LinkedListQueue should add number', t => {
  const nums = [1, 2, 3];
  const queue = LinkedListQueueFromNumbers(nums);
  t.is(queue.toString(), '1,2,3');
});

test('LinkedListQueue should remove number', t => {
  const nums = [1, 2, 3];
  const queue = LinkedListQueueFromNumbers(nums);
  t.is(queue.remove(), 1);
  t.is(queue.toString(), '2,3');
  t.is(queue.remove(), 2);
  t.is(queue.toString(), '3');
  t.is(queue.remove(), 3);
  t.is(queue.toString(), '');
  // TODO: fix me for return undefined when empty
  // t.is(queue.remove(), undefined);
});

