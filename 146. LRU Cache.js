/**
 * @param {number} capacity
 */
//need to refactor
var ListNode = function (key, val, prev, next) {
  this.key = key;
  this.val = val;
  this.next = next || null;
  this.prev = prev || null;
};

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.head = null;
  this.last = null;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key);
  if (!node) return -1;

  if (node === this.last || this.head === this.last) return node.val;
  if (node == this.head) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  this.last.next = node;
  node.next = null;
  node.prev = this.last;
  this.last = this.last.next;

  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.get(key)) {
    let node = this.map.get(key);
    node.val = value;
    this.map.set(key, node);
    if (node === this.last || this.head === this.last) return;
    if (node == this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    this.last.next = node;
    node.next = null;
    node.prev = this.last;
    this.last = this.last.next;

    return;
  }

  if (!this.head) {
    //if cache is empty
    let node = new ListNode(key, value, null, null);
    this.head = node;
    this.last = node;
    this.map.set(key, node);
  } else {
    if (this.map.size < this.capacity) {
      let node = new ListNode(key, value, this.last, null);
      this.last.next = node;
      this.last = this.last.next;
      this.map.set(key, node);
    } else {
      if (!this.head.next) {
        this.map.delete(this.head.key);
        this.head.key = key;
        this.head.val = value;
        this.map.set(key, this.head);
      } else {
        let node = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this.map.delete(node.key);

        node.key = key;
        node.val = value;
        node.prev = this.last;
        node.next = null;
        this.map.set(key, node);

        this.last.next = node;
        this.last = this.last.next;
      }
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
