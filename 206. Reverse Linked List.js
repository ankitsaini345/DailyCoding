/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} node
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   let [p, c, n] = [null, head, null];

//   while (c) {
//     n = c.next;
//     c.next = p;
//     p = c;
//     c = n;
//   }
//   return p;
// };

// using recursion
var reverseList = function (head) {
  const reverse = function (node) {
    if (!node) return;
    if (!node.next) {
      head = node;
      return;
    }
    reverse(node.next);
    node.next.next = node;
    node.next = null;
    return;
  };
  reverse(head);
  return head;
};
