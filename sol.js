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
        if (tnode != this.head) {
            if (tnode != this.lastnode) {
                tnode.prev.next = tnode.next;
                if(tnode.next) tnode.next.prev = tnode.prev;
            } else {
                this.lastnode = tnode.prev;
                tnode.prev.next = null;
            }
            tnode.prev = null;
            tnode.next = this.head;
            this.head = tnode;

        }
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
        if (this.size < this.capacity) {
            let newnode = new listnode(key, value, null, this.head);
            if (this.head) this.head.prev = newnode;
            this.head = newnode;
            this.mp.set(key, newnode);
            if (!this.lastnode) this.lastnode = newnode;
            this.size++;
        } else {
            if (this.head == this.lastnode) {
                this.mp.delete(this.head);
                this.head.key = key;
                this.head.val = value;
                this.mp.set(key, this.head);


            } else {
                this.lastnode.prev.next = this.lastnode.next;
                if (this.lastnode.next) this.lastnode.next.prev = this.lastnode.prev;
                this.mp.delete(this.lastnode);
                this.lastnode = this.lastnode.prev;

                let newnode = new listnode(key, value, null, this.head);
                this.head.prev = newnode;
                this.mp.set(key, this.head);
            }
        }
    }
    else {
        let tnode = this.mp.get(key);
        if (tnode != this.head) {
            if (tnode != this.lastnode) {
                tnode.prev.next = tnode.next;
                tnode.next.prev = tnode.prev;
            } else {
                this.lastnode = tnode.prev;
                tnode.prev.next = null;
            }
            tnode.prev = null;
            tnode.next = this.head;
            tnode.val = value;
            this.head = tnode;
        } else {
            tnode.val = value;
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let ch = new LRUCache(2);
console.log(ch.put(2, 1));
console.log(ch.put(2, 2));
console.log(ch.get(2));
console.log(ch.put(1, 1));
console.log(ch.put(4, 1));
console.log(ch.get(2));

