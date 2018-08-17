import { LinkedList } from "./linked-list/LinkedList";
import { StackFactory, StackType } from "./stack/Stack";
function testLinkedList(nums:number[]) {
  const linkedList = new LinkedList<number>();
  nums.forEach(num => {
    linkedList.addLast(num);
  });
  return linkedList;
}
const linkedList = testLinkedList([0, 1, 2, 3, 4, 5, 6]);
linkedList.add(3, 6);
console.log(`${linkedList.remove(3)}`);
console.log(`${linkedList}`);
console.log(`${linkedList.get(5)}`);

function testStack(nums:number[]) {
  const stack = new StackFactory().getStack(StackType.ArrayStack);
  nums.forEach(num => {
    stack.push(num);
  });
  return stack;
}
console.log('------------ StackTest ------------')
const stack = testStack([6, 5, 4, 3, 2, 1, 0]);
console.log(`Stack: ${stack.toString()}`);
while (!stack.isEmpty()) {
  console.log(stack.pop());
}