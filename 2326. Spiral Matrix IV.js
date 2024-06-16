/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  const answer = new Array(m).fill().map((e) => new Array(n).fill(-1));

  let [top, left, bottom, right] = [0, 0, m - 1, n - 1];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      if (head) {
        answer[top][i] = head.val;
        head = head.next;
      } else break;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      if (head) {
        answer[i][right] = head.val;
        head = head.next;
      } else break;
    }
    right--;

    for (let i = right; i >= left && top <= bottom; i--) {
      if (head) {
        answer[bottom][i] = head.val;
        head = head.next;
      } else break;
    }
    bottom--;

    for (let i = bottom; i >= top && left <= right; i--) {
      if (head) {
        answer[i][left] = head.val;
        head = head.next;
      } else break;
    }
    left++;
  }
  return answer;
};
