class LinkedListNode<E> {
  public e:E;
  public next:LinkedListNode<E>;
  constructor(e:E) {
    this.e = e;
  }
}

export {
  LinkedListNode,
}