/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let minHeap = [];
  for (let i = 0; i < points.length; i++) {
    const element = points[i];
    insert(minHeap, { key: distance(element[0], element[1]), val: element });
    bubbleUp(minHeap);
  }
  const answer = [];
  while (k--) {
    answer.push(remove(minHeap).val);
  }
  return answer;
};

function distance(x, y) {
  return Math.sqrt(x * x + y * y);
}

function insert(minHeap, val) {
  minHeap.push(val);
  bubbleUp(minHeap);
}

function remove(minHeap) {
  const item = minHeap[0];
  swap(minHeap, 0, minHeap.length - 1);
  minHeap.pop();
  bubbleDown(minHeap);
  return item;
}

function bubbleUp(minHeap, i = minHeap.length - 1) {
  const parent = i === 0 ? -1 : Math.trunc((i - 1) / 2);
  if (parent < 0) return;

  if (minHeap[parent].key > minHeap[i].key) {
    swap(minHeap, parent, i);
    bubbleUp(minHeap, parent);
  }
}

function bubbleDown(minHeap, parent = 0) {
  const left = 2 * parent + 1;
  const right = 2 * parent + 2;

  if (right < minHeap.length) {
    if (
      minHeap[right].key <= minHeap[left].key &&
      minHeap[right].key < minHeap[parent].key
    ) {
      swap(minHeap, right, parent);
      bubbleDown(minHeap, right);
    } else if (
      minHeap[left].key <= minHeap[right].key &&
      minHeap[left].key < minHeap[parent].key
    ) {
      swap(minHeap, left, parent);
      bubbleDown(minHeap, left);
    }
  } else if (
    left < minHeap.length &&
    minHeap[left].key < minHeap[parent].key
  ) {
    swap(minHeap, left, parent);
    bubbleDown(minHeap, left);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const points = [
    [-2, 10],
    [-4, -8],
    [10, 7],
    [-4, -7],
  ],
  k = 3;

console.log(kClosest(points, k));
