const minHeap = [];

const insert = (el) => {
  if (!minHeap.length) {
    minHeap.push(el);
    return
  }
  const index = findIndex(el);
  minHeap.splice(index, 0, el);
  console.log(minHeap);
};

const findIndex = (el) => {
  let [l, r] = [0, minHeap.length - 1];

  //   if (el >= minHeap[r]) return r + 1;
  //   if (el <= minHeap[l]) return l;
  do {
    if (el >= minHeap[r]) return r + 1;
    if (el <= minHeap[l]) return l;

    mid = Math.floor((l + r) / 2);
    if (l == mid) return l + 1;
    if (minHeap[mid] > el) r = mid - 1;
    else l = mid + 1;
  } while (l <= r);
};

[2,1,5,0,15,2,87,45,32, 1000].forEach(el => {
    console.log('inserting ' + el);
    insert(el)
})
