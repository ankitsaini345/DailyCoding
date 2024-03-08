/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let answer = 0;
    let countMap = createCountMap(tasks);
    const countMaxHeap = createHeap(countMap);
    createlastUsedMap(countMap);
    let i = 0,
      count = 0;
    let tasksArr = [];
    while (count < tasks.length) {
      let task = remove(countMaxHeap);
      if (!task) {
        for (const item of tasksArr) {
          insert(countMaxHeap, item);
        }
        tasksArr = [];
        answer++;
        i++;
        continue;
      }
      let lastUsed = countMap.get(task[0]);
      if (lastUsed == -1 || i - lastUsed > n) {
        answer++;
        countMap.set(task[0], i);
        let newCount = task[1] - 1;
        if (newCount > 0) tasksArr.push([task[0], newCount]);
        for (const item of tasksArr) {
          insert(countMaxHeap, item);
        }
        tasksArr = [];
        i++;
        count++;
      } else {
        tasksArr.push(task);
      }
    }
    return answer;
  };
  
  function createCountMap(array) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      map.set(element, map.get(element) + 1 || 1);
    }
    return map;
  }
  
  function createlastUsedMap(map) {
    for (let [key, val] of map) {
      map.set(key, -1);
    }
  }
  
  function createHeap(map) {
    const maxHeap = [];
    for (const entry of map.entries()) {
      insert(maxHeap, entry);
    }
    return maxHeap;
  }
  
  function insert(maxHeap, val) {
    maxHeap.push(val);
    bubbleUp(maxHeap);
  }
  
  function remove(maxHeap) {
    if (!maxHeap.length) return null;
    const item = maxHeap[0];
    swap(maxHeap, 0, maxHeap.length - 1);
    maxHeap.pop();
    bubbleDown(maxHeap);
    return item;
  }
  
  function bubbleUp(maxHeap, i = maxHeap.length - 1) {
    const parent = i === 0 ? -1 : Math.trunc((i - 1) / 2);
    if (parent < 0) return;
  
    if (maxHeap[parent][1] < maxHeap[i][1]) {
      swap(maxHeap, parent, i);
      bubbleUp(maxHeap, parent);
    }
  }
  
  function bubbleDown(maxHeap, parent = 0) {
    const left = 2 * parent + 1;
    const right = 2 * parent + 2;
  
    if (right < maxHeap.length) {
      if (
        maxHeap[right][1] >= maxHeap[left][1] &&
        maxHeap[right][1] > maxHeap[parent][1]
      ) {
        swap(maxHeap, right, parent);
        bubbleDown(maxHeap, right);
      } else if (
        maxHeap[left][1] >= maxHeap[right][1] &&
        maxHeap[left][1] > maxHeap[parent][1]
      ) {
        swap(maxHeap, left, parent);
        bubbleDown(maxHeap, left);
      }
    } else if (left < maxHeap.length && maxHeap[left][1] > maxHeap[parent][1]) {
      swap(maxHeap, left, parent);
      bubbleDown(maxHeap, left);
    }
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }