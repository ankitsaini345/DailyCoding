/**
 * @param {number} capacity
 */

 function listnode(key = null, val = null, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.mp = new Map();
    this.head = null;
    this.lastnode = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.mp.has(key)) {
        return -1;
    } else {
        let tnode = this.mp.get(key);
        if(this.size == 1) return tnode.val;
        if (tnode.prev) tnode.prev.next = tnode.next;
        if (tnode.next) tnode.next.prev = tnode.prev;
        if (tnode == this.lastnode) this.lastnode = tnode.prev;
        tnode.prev = null;
        tnode.next = this.head;
        tnode.next.prev = tnode;
        this.head = tnode;
        return tnode.val;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (!this.mp.has(key)) {
        if (this.size == this.capacity) {
            if (this.size == 1) {
                this.head = null;
                this.lastnode = null;
                this.mp.clear();
            } else {
                let tnode = this.lastnode;
                this.lastnode = this.lastnode.prev;
                this.mp.delete(tnode.key)
                delete tnode;
                if(this.lastnode) this.lastnode.next = null;
            }
            this.size--;
        }
        let newnode = new listnode(key, value, null, this.head);
        if(this.head) this.head.prev = newnode;
        this.head = newnode;
        this.mp.set(key, this.head);
        if (!this.lastnode) this.lastnode = this.head;
        this.size++;
    }
    else {
        let tnode = this.mp.get(key);
        tnode.val = value;
        if (tnode.prev) tnode.prev.next = tnode.next;
        if (tnode.next) tnode.next.prev = tnode.prev;
        if (tnode == this.lastnode) {
            this.lastnode = tnode.prev;
            if(this.lastnode) this.lastnode.next = null;
        }
        tnode.prev = null;
        tnode.next = this.head;
        this.head = tnode;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// let ch = new LRUCache(2);
// console.log(ch.put(2,1));
// console.log(ch.put(2,2));
// console.log(ch.get(2));
// console.log(ch.put(1,1));
// console.log(ch.put(4,1));
// console.log(ch.get(2));

