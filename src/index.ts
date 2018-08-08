import { LinkedList } from "./linked-list/LinkedList";
function testLinkedList(nums:number[]) {
  const linkedList = new LinkedList<number>();
  nums.forEach(num => {
    linkedList.addLast(num);
  });
  return linkedList;
}
const linkedList = testLinkedList([0, 1, 2, 3]);
linkedList.add(1, 6);
console.log(linkedList);