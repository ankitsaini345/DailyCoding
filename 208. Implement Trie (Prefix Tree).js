function TrieNode(val, eow = false) {
  this.val = val;
  this.child = new Map();
  this.eow = eow;
}

var Trie = function (val) {
  this.root = new TrieNode(0);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node;
  let curr = this.root;
  for (const ch of word) {
    node = curr.child.get(ch) || new TrieNode(ch);
    curr.child.set(ch, node);
    curr = node;
  }
  node.eow = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.root;
  for (const ch of word) {
    node = curr.child.get(ch);
    if (!node) return false;
    curr = node;
  }
  return node.eow;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root;
    for (const ch of prefix) {
      node = curr.child.get(ch);
      if (!node) return false;
      curr = node;
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
