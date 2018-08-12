import { LinkedListStack } from "./LinkedListStack";
import { ArrayStack } from "./ArrayStack";

export interface Stack<E> {
  push(e:E):void;
  pop():E;
  peek():E;
  getSize():number;
  isEmpty():boolean;
}

export enum StackType {
  ArrayStack,
  LinkedListStack,
}
export class StackFactory {
  constructor() {
  }
  public getStack(stackType:StackType = StackType.LinkedListStack) {
    if (stackType === StackType.ArrayStack) {
      return new ArrayStack();
    }
    return new LinkedListStack();
  }
}