/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = [];
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.heap.push(nums[i])
    heapify_add(this.heap, i);
  }
//   console.log(this.heap);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  heapify_add(this.heap, this.heap.length - 1);
//   console.log(this.heap);
  return kthLargestItem(this.heap, this.k)
};

function heapify_add(array, index) {
  const parent = index === 0 ? -1 : Math.trunc((index - 1) / 2);
  if (parent < 0) return;

  if (array[parent] >= array[index]) return;

  swap(array,parent, index);

  heapify_add(array, parent);
}

function heapify(array, i = 0) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (right < array.length) {
    if (array[right] >= array[left] && array[right] > array[i]) {
      swap(array, right, i);
      heapify(array, right);
    } else if (array[left] >= array[right] && array[left] > array[i]) {
      swap(array, left, i);
      heapify(array, left);
    }
  } else if (left < array.length && array[left] > array[i]) {
    swap(array, left, i);
    heapify(array, left);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function kthLargestItem(heap, k) {
  const tempArray = [...heap];
  for (let i = 0; i < k-1; i++) {
    tempArray[0] = tempArray[tempArray.length - 1];
    tempArray.pop();
    heapify(tempArray);
    // console.log(tempArray);
  }
  return tempArray[0]
}

// var obj = new KthLargest(3, [4, 5, 8, 2]);
// console.log(obj);
// console.log(obj.add(3));
// console.log(obj.add(5));
// console.log(obj.add(10));
// console.log(obj.add(9));
// console.log(obj.add(4));

var obj = new KthLargest(3, [1,1]);
console.log(obj);
console.log(obj.add(1));
console.log(obj.add(1));
console.log(obj.add(3));
console.log(obj.add(3));
console.log(obj.add(3));
console.log(obj.add(4));
console.log(obj.add(4));
console.log(obj.add(4));
