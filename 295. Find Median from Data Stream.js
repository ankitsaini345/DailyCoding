var MedianFinder = function () {
  this.maxHeap = new MaxPriorityQueue();
  this.minHeap = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.isEmpty() || num < this.maxHeap.front().element)
    this.maxHeap.enqueue(num);
  else this.minHeap.enqueue(num);
  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    this.minHeap.enqueue(this.maxHeap.dequeue().element);
  } else if (this.minHeap.size() - this.maxHeap.size() > 1)
    this.maxHeap.enqueue(this.minHeap.dequeue().element);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if ((this.maxHeap.size() + this.minHeap.size()) % 2)
    return this.maxHeap.size() > this.minHeap.size()
      ? this.maxHeap.front().element
      : this.minHeap.front().element;
  else return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
