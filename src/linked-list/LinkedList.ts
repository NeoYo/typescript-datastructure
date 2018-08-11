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

  public get(index:number) {
    if(index < 0 || index > this.size) {
      throw new RangeError(`The argument index must be between 0 and ${this.size}.`);;
    }
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  }
  
  public contains(e:E) {
    let cur = this.dummyHead.next;
    while (cur !== undefined) {
      if (cur.e === e) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  public getSize() {
    return this.size;
  }

  public isEmpty() {
    return this.size === 0;
  }

  public addFirst(e:E) {
    this.add(0, e);
  }

  public addLast(e:E) {
    this.add(this.size, e);
  }

  public getFirst() {
    this.get(0);
  }

  public getLast() {
    this.get(this.size - 1);
  }

  public toString() {
    let cur = this.dummyHead.next;
    let str = '';
    while (cur !== undefined) {
      str += cur.e;
      cur = cur.next;
      str += ' --> ';
    }
    return str;
  }
}

export {
  LinkedList
}