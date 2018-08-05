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
    let nextNode = this.head;
    while (nextNode.next !== undefined) {
      nextNode = nextNode.next;
    }
    nextNode.next = new LinkedListNode(e);
  }
}

export {
  LinkedList
}