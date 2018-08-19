import { Queue } from "./Queue";

export class ArrayQueue<E> implements Queue<E> {
  private array:E[] = [];
  public add(e:E) {
    this.array.push(e);
  }
  public remove() {
    return this.array.shift();
  }
  public peek():E {
    return this.array[0];
  }
  public isEmpty() {
    return this.array.length === 0;
  }
  public toString() {
    return this.array.toString();
  }
}
