export interface Queue<E> {
  add(e:E):void;
  remove():E|undefined;
  peek():E;
  isEmpty():boolean;
  toString():string;
}

import { Queue } from './Queue';
import { ArrayQueue } from './ArrayQueue';
import { LinkedListQueue } from './LinkedListQueue';

export enum QueueType {
  ArrayQueue,
  LinkedListQueue,
}

export class QueueFactory {
  public static getQueue<E>(type:QueueType) : Queue<E> {
    if (type === QueueType.ArrayQueue) {
      return new ArrayQueue<E>();
    } else if (type === QueueType.LinkedListQueue) {
      return new LinkedListQueue<E>();
    }
    throw new TypeError('only QueueType is allowed for create');
  }
}