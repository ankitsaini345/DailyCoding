/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const map = new Map();
    let curr = head;
    while(curr) {
        map.set(curr, new Node(curr.val, null, null));
        curr = curr.next;
    }
    curr = head;
    while(curr) {
        let node = map.get(curr);
        let next = curr.next ? map.get(curr.next) : null;
        let random = curr.random ? map.get(curr.random) : null;
        node.next = next;
        node.random = random;
        curr = curr.next;
    }
    return map.get(head);
};