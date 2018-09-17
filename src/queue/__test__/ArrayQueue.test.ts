import test from 'ava';
import { ArrayQueue } from '../ArrayQueue';

function arrayQueueFromNumbers(nums:number[]) {
  const queue = new ArrayQueue();
  for (const number of nums) {
    queue.add(number);
  }
  return queue;
}

test('ArrayQueue should add number', t => {
  const nums = [1, 2, 3];
  const queue = arrayQueueFromNumbers(nums);
  t.is(queue.toString(), '1,2,3');
});

test('ArrayQueue should remove number', t => {
  const nums = [1, 2, 3];
  const queue = arrayQueueFromNumbers(nums);
  t.is(queue.remove(), 1);
  t.is(queue.toString(), '2,3');
  t.is(queue.remove(), 2);
  t.is(queue.toString(), '3');
  t.is(queue.remove(), 3);
  t.is(queue.toString(), '');
  t.is(queue.remove(), undefined);
});

test('ArrayQueue should peek number', t => {
  const nums = [1, 2, 3];
  const queue = arrayQueueFromNumbers(nums);
  t.is(queue.peek(), 1);
  t.is(queue.peek(), 1);
});

test('ArrayQueue is Empty', t => {
  const nums = [1, 2];
  const queue = arrayQueueFromNumbers(nums);
  queue.remove();
  t.is(queue.isEmpty(), false);
  queue.remove();
  t.is(queue.isEmpty(), true);
});
