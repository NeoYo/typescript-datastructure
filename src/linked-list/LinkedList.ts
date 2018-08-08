import { LinkedListNode } from "./LinkedListNode";

class LinkedList<E> {
  constructor() {
  }
  private head:LinkedListNode<E>;

  public add(index:number, e:E){
    let prev = this.head;
    for (let i = 1; i < index; i++) {
      prev = prev.next;
    }
    const node = new LinkedListNode(e);
    node.next = prev.next;
    prev.next = node;
  }

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