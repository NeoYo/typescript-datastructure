import { LinkedList } from "./linked-list/LinkedList";
function testLinkedList() {
  const linkedList = new LinkedList<number>();
  linkedList.addLast(1);
  linkedList.addLast(2);
  linkedList.addLast(3);
  linkedList.addLast(4);
  console.log(linkedList);
}
testLinkedList();