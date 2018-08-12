import { Stack } from "./Stack";
import { LinkedList } from "../linked-list/LinkedList";

export class LinkedListStack<E> implements Stack<E> {
  constructor() {
  }
  private list = new LinkedList<E>();
  push(e: E) {
    this.list.addFirst(e);
  }
  pop() {
    return this.list.removeFirst();
  }
  peek() {
    return this.list.getFirst();
  }
  getSize() {
    return this.list.getSize();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
}