import { LinkedList } from "./linked-list/LinkedList";
function testLinkedList(nums:number[]) {
  const linkedList = new LinkedList<number>();
  nums.forEach(num => {
    linkedList.addLast(num);
  });
  return linkedList;
}
const linkedList = testLinkedList([2, 3, 4, 5]);
console.log(linkedList);