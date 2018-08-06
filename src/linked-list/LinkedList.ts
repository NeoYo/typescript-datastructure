import { LinkedListNode } from "./LinkedListNode";

class LinkedList<E> {
  constructor() {
  }
  private head:LinkedListNode<E>;
  public addLast(e:E) {
    if (this.head === undefined) {
      this.head = new LinkedListNode(e);
      return;
    }
    let prev = this.head;
    while (prev.next !== undefined) {
      prev = prev.next;
    }
    prev.next = new LinkedListNode(e);
  }
}

export {
  LinkedList
}