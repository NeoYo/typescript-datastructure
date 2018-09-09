import test from 'ava';
import { QueueFactory, QueueType } from '../Queue';
import { LinkedListQueue } from '../LinkedListQueue';
import { ArrayQueue } from '../ArrayQueue';

test('QueueFactory should get LinkedListQueue', t => {
  const queue = QueueFactory.getQueue<number>(QueueType.LinkedListQueue);
  t.true(queue instanceof LinkedListQueue);
  t.false(queue instanceof ArrayQueue);
});

test('QueueFactory should get ArrayQueue', t => {
  const queue = QueueFactory.getQueue<number>(QueueType.ArrayQueue);
  t.false(queue instanceof LinkedListQueue);
  t.true(queue instanceof ArrayQueue);
});

test('QueueFactory should throw TypeError', t => {
  const error = t.throws(() => {
    QueueFactory.getQueue<number>(4);
  }, TypeError);
  t.is(error.message, 'only QueueType is allowed for create');
});