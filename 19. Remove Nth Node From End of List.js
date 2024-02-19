/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //find size
  let c = head;
  let size = 1;
  while (c.next) {
    size++;
    c = c.next;
  }

  //find node to del from front
  let del = size - n;
  let [curr, next] = [head, head.next];
  while (--del) {
    curr = curr.next;
    next = next.next;
  }
  //del the node
  curr.next = next.next;
  return head;
};
