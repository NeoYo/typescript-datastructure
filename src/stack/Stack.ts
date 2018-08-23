import { LinkedListStack } from "./LinkedListStack";
import { ArrayStack } from "./ArrayStack";

export interface Stack<E> {
  push(e:E):void;
  pop():E|undefined;
  peek():E|undefined;
  getSize():number;
  isEmpty():boolean;
  toString():string;
}

export enum StackType {
  ArrayStack,
  LinkedListStack,
}
export class StackFactory {
  constructor() {
  }
  public getStack<E>(stackType:StackType = StackType.LinkedListStack): Stack<E> {
    if (stackType === StackType.ArrayStack) {
      return new ArrayStack<E>();
    }
    return new LinkedListStack<E>();
  }
}