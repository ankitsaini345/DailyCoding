function TrieNode(val, eow = false) {
  this.val = val;
  this.child = new Map();
  this.eow = eow;
}

var WordDictionary = function () {
  this.root = new TrieNode(0);
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node;
  var curr = this.root;
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
WordDictionary.prototype.search = function (word) {
  let childNodeArry = [];
  childNodeArry.push(this.root);
  for (const ch of word) {
    let tempArray = [];
    if (ch === ".") {
      childNodeArry.forEach(
        (childNode) =>
          (tempArray = [...tempArray, ...Array.from(childNode.child.values())])
      );
    } else {
      let found = false;
      childNodeArry.forEach((childNode) => {
        if (childNode.child.has(ch)) {
          found = true;
          tempArray.push(childNode.child.get(ch));
        }
      });
      if (!found) return false;
    }
    childNodeArry = tempArray;
}
 return childNodeArry.some((childNode) => {
    if (childNode.eow) return true;
  });
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 */
var obj = new WordDictionary();
obj.addWord("bade");
var param_2 = obj.search(".a..");
console.log(param_2);
