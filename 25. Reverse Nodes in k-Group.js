function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let curr = head;
  let finalListLast = null;
  let finalList = new ListNode();
  while (curr) {
    let count = k - 1;
    let start = curr;
    while (count && curr) {
      curr = curr.next;
      count--;
    }
    if (!curr) {
      finalListLast ? (finalListLast.next = start) : (finalList.next = start);
    } else {
      let end = curr;
      curr = curr.next;
      end.next = null;
      let [first, last] = reverse(start);
      if (finalListLast) {
        finalListLast.next = first;
        finalListLast = last;
      } else {
        finalList.next = first;
        finalListLast = last;
      }
    }
  }
  return finalList.next;
};

function reverse(head) {
  let [p, c, n] = [null, head, null];
  while (c) {
    n = c.next;
    c.next = p;
    p = c;
    c = n;
  }
  return [p, head];
}

function generateList(array) {
  let head, curr;
  for (let i = 0; i < array.length; i++) {
    if (!head) {
      head = new ListNode(array[i]);
      curr = head;
    } else {
      curr.next = new ListNode(array[i]);
      curr = curr.next;
    }
  }
  return head;
}

(head = []), (k = 0);

const list = generateList(head);

const newList = reverseKGroup(list, k);

function print(list) {
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

print(newList);
