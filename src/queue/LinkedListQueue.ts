import { Queue } from './Queue';
import { LinkedList } from '../linked-list/LinkedList';


class LinkedListQueue<E> implements Queue<E> {
  private linkedList = new LinkedList<E>(); 
  add(e: E): void {
    this.linkedList.addLast(e);
  }
  remove(): E {
    return this.linkedList.removeFirst();
  }
  peek(): E {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  toString(): string {
    return this.linkedList.toString();
  }
}

export {
  LinkedListQueue
}