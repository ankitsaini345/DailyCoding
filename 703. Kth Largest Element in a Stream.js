/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.minHeap = [];
    this.k = k;
  
    for (let i = 0; i < nums.length; i++) {
      this.add(nums[i])
    }
  };
  
  function bubbleUp(minHeap, i = minHeap.length - 1) {
      const parent = i === 0 ? -1 : Math.trunc((i - 1) / 2);
      if (parent < 0) return;
  
      if(minHeap[parent] > minHeap[i]) {
          swap(minHeap, parent, i);
          bubbleUp(minHeap, parent);
      }
  }
  
  function bubbleDown(minHeap, parent = 0) {
      const left = 2 * parent + 1;
      const right = 2 * parent + 2;
  
      if (right < minHeap.length) {
          if (minHeap[right] <= minHeap[left] && minHeap[right] < minHeap[parent]) {
            swap(minHeap, right, parent);
            bubbleDown(minHeap, right);
          } else if (
            minHeap[left] <= minHeap[right] &&
            minHeap[left] < minHeap[parent]
          ) {
            swap(minHeap, left, parent);
            bubbleDown(minHeap, left);
          }
        } else if (
          minHeap[left] < minHeap[parent]
        ) {
          swap(minHeap, left, parent);
          bubbleDown(minHeap, left);
      }
  
      
  }
  
  /**
   * @param {number} val
   * @return {number}
   */
  KthLargest.prototype.add = function (val) {
      if (this.minHeap.length < this.k) {
          this.minHeap.push(val);
          bubbleUp(this.minHeap)
        } else {
          if (this.minHeap[0] < val) {
            this.minHeap[0] = val;
            bubbleDown(this.minHeap)
          }
        }
    return this.minHeap[0];
  };
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }