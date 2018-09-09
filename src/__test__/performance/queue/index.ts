import { LinkedListQueue } from "../../../queue/LinkedListQueue";
import { ArrayQueue } from '../../../queue/ArrayQueue';

function testLinkedListQueue() {
  const queue = new LinkedListQueue<number>();
  console.time('LinkedListQueue Add');
  for (let i = 0; i < 50000; i++) {
    queue.add(i);
  }
  console.timeEnd('LinkedListQueue Add');
  while (!queue.isEmpty()) {
    queue.remove();
  }
}

function testArrayQueue() {
  const queue = new ArrayQueue<number>();
  console.time('ArrayQueue Add');
  for (let i = 0; i < 50000; i++) {
    queue.add(i);
  }
  console.timeEnd('ArrayQueue Add');
  while (!queue.isEmpty()) {
    queue.remove();
  }
}

export function testQueue() {
  console.time('LinkedListQueue Perf');
  testLinkedListQueue();
  console.timeEnd('LinkedListQueue Perf');
  
  console.time('ArrayQueue Perf');
  testArrayQueue();
  console.timeEnd('ArrayQueue Perf');
}
