import { Queue } from "./Queue";

export class ArrayQueue<E> implements Queue<E> {
  private array:E[] = [];
  public add(e:E) {
    this.array.push(e);
  }
  remove() {
    return this.array.shift();
  }
  peek():E {
    return this.array[0];
  }
  isEmpty() {
    return this.array.length === 0;
  }
  toString() {
    return this.array.toString();
  }
}