class LinkedListNode<E> {
  public e:E;
  public next:LinkedListNode<E>;
  constructor(e?:E) {
    this.e = e;
  }
  public toString() {
    return this.e.toString();
  }
}

export {
  LinkedListNode,
}