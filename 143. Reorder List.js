/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  //find mid
  let [slow, fast] = [head, head.next];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondList = slow.next;
  slow.next = null;

  //reverse second list
  let [p, c, n] = [null, secondList, null];
  while (c) {
    n = c.next;
    c.next = p;
    p = c;
    c = n;
  }
  secondList = p;
  firstList = head;
  //merge both list
  let first, second;
  while (firstList && secondList) {
    first = firstList.next;
    second = secondList.next;
    firstList.next = secondList;
    secondList.next = first;

    firstList = first;
    secondList = second;
  }
};
