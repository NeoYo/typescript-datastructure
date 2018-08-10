import { LinkedListNode } from "./LinkedListNode";

class LinkedList<E> {
  private dummyHead = new LinkedListNode<E>();
  private size:number = 0;
  constructor() {
  }

  public add(index:number, e:E){
    if(index < 0 || index > this.size) {
      throw new RangeError(`The argument index must be between 0 and ${this.size}.`);;
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const node = new LinkedListNode(e);
    node.next = prev.next;
    prev.next = node;
    ++this.size;
  }

  public getSize() {
    return this.size;
  }

  public isEmpty(){
    return this.size === 0;
  }

  public addFirst(e:E){
    this.add(0, e);
  }

  public addLast(e:E){
    this.add(this.size, e);
  }

  public get(index:number){
    if(index < 0 || index > this.size) {
      throw new RangeError(`The argument index must be between 0 and ${this.size}.`);;
    }
    let next = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      next = next.next;
    }
    return next;
  }

  public toString() {
    let prev = this.dummyHead.next;
    let str = '';
    while (prev !== undefined) {
      str += prev.e;
      prev = prev.next;
      str += ' --> ';
    }
    return str;
  }
}

export {
  LinkedList
}