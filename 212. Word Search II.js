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
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  this.dict = new Trie();
  const row = board.length;
  const col = board[0].length;
  const answer = new Set();
  const visited = new Set();
  for (const word of words) {
    this.dict.insert(word);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const char = board[i][j];
      search(this.dict.root, "", i, j);
    }
  }

  function search(currNode, prefix, i, j) {
    const currPosition = "" + i + j;
    if (i < 0 || i >= row || j < 0 || j >= col || visited.has(currPosition))
      return;
    const char = board[i][j];
    const node = currNode.child.get(char);
    if (!node) return false;
    visited.add(currPosition);

    const currWord = prefix + char;
    if (node.eow) answer.add(currWord);

    search(node, currWord, i + 1, j);
    search(node, currWord, i, j + 1);
    search(node, currWord, i - 1, j);
    search(node, currWord, i, j - 1);

    visited.delete(currPosition);
  }
  return Array.from(answer);
};

// const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"];

// const words = ["aaa"], board =[["a", "a"]]
const board = [
    ["a", "b", "c", "e"],
    ["x", "x", "c", "d"],
    ["x", "x", "b", "a"],
  ],
  words = ["abc", "abcd"];
console.log(findWords(board, words));
