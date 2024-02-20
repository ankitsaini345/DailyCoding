/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//not efficient
// var removeNthFromEnd = function (head, n) {
//   //find size
//   let c = head;
//   let size = 1;
//   while (c.next) {
//     size++;
//     c = c.next;
//   }

//   //find node to del from front
//   let del = size - n;
//   let prev,
//     curr = head;
//   while (del--) {
//     prev = curr;
//     curr = curr.next;
//   }
//   if (prev) prev.next = curr.next;
//   else head = curr.next;
//   return head;
// };

var removeNthFromEnd = function (head, n) {
  let [leftPtr, RightPtr] = [head, head];
  while (n--) {
    RightPtr = RightPtr.next;
  }
  if (!RightPtr) return head.next;
  while (RightPtr.next) {
    RightPtr = RightPtr.next;
    leftPtr = leftPtr.next;
  }

  leftPtr.next = leftPtr.next.next;
  return head;
};

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function genList(array) {
  let head, curr;
  for (let i = 0; i < array.length; i++) {
    const node = new ListNode(array[i]);
    if (!head) {
      head = node;
      curr = node;
    } else {
      curr.next = node;
      curr = curr.next;
    }
  }
  return head;
}

const array = [1, 2, 3, 4, 5],
  n = 2;

const head = genList(array);

console.log(removeNthFromEnd(head, n));
