import { Stack } from "./Stack";

class ArrayStack<E> implements Stack<E>{
  private array:E[] = [];
  constructor() {
  }
  push(e:E): void {
    this.array.push(e);
  }
  pop(): E {
    return this.array.pop();
  }
  peek(): E {
    return this.array[this.array.length - 1];
  }
  getSize(): number {
    return this.array.length;
  }
  isEmpty(): boolean {
    return this.array.length === 0;
  }
}

export {
  ArrayStack,
}