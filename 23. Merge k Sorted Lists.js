//Definition for singly-linked list.
//  function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//  }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let mergedList = null;
    for (let i = 0; i < lists.length; i++) {
      mergedList = merge2List(mergedList, lists[i]);
    }
    return mergedList;
  };
  
  var merge2List = function (l1, l2) {
    let head = null;
    let curr = null;
    let node;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        node = l1;
        l1 = l1.next;
      } else {
        node = l2;
        l2 = l2.next;
      }
      node.next = null;
      if (!head) {
        head = node;
        curr = node;
      } else {
        curr.next = node;
        curr = curr.next;
      }
    }
  
    if (!head) {
      head = l1 || l2;
    } else {
      curr.next = l1 || l2;
    }
  
    return head;
  };
  