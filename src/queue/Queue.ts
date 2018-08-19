export interface Queue<E> {
  add(e:E):void;
  remove():E|undefined;
  peek():E;
  isEmpty():boolean;
  toString():string;
}

