export interface Stack<E> {
  push(e:E):void;
  pop():E;
  peek():E;
  getSize():number;
  isEmpty():boolean;
}

export class StackFactory {
  constructor() {
  }
  public getStack() {
  }
}