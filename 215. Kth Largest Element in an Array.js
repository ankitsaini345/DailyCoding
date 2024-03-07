/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxHeap = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        insert(maxHeap, element)
    }
    while(--k) {
        remove(maxHeap);
    }
    return maxHeap[0];
};

function insert(maxHeap, val) {
    maxHeap.push(val);
    bubbleUp(maxHeap);
  }
  
  function remove(maxHeap) {
    const item = maxHeap[0];
    swap(maxHeap, 0, maxHeap.length - 1);
    maxHeap.pop();
    bubbleDown(maxHeap);
    return item;
  }
  
  function bubbleUp(maxHeap, i = maxHeap.length - 1) {
    const parent = i === 0 ? -1 : Math.trunc((i - 1) / 2);
    if (parent < 0) return;
  
    if (maxHeap[parent] < maxHeap[i]) {
      swap(maxHeap, parent, i);
      bubbleUp(maxHeap, parent);
    }
  }
  
  function bubbleDown(maxHeap, parent = 0) {
    const left = 2 * parent + 1;
    const right = 2 * parent + 2;
  
    if (right < maxHeap.length) {
      if (maxHeap[right] >= maxHeap[left] && maxHeap[right] > maxHeap[parent]) {
        swap(maxHeap, right, parent);
        bubbleDown(maxHeap, right);
      } else if (
        maxHeap[left] >= maxHeap[right] &&
        maxHeap[left] > maxHeap[parent]
      ) {
        swap(maxHeap, left, parent);
        bubbleDown(maxHeap, left);
      }
    } else if (left < maxHeap.length && maxHeap[left] > maxHeap[parent]) {
      swap(maxHeap, left, parent);
      bubbleDown(maxHeap, left);
    }
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }