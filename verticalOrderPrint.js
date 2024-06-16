const map = new Map();
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
function verticalPrint(node, distance = 0) {
  if (!node) return;
  //   console.log(node.val);
  if (min > distance) min = distance;
  if (max < distance) max = distance;
  if (!map.has(distance)) map.set(distance, [node.val]);
  else map.get(distance).push(node.val);
  verticalPrint(node.left, distance - 1);
  verticalPrint(node.right, distance + 1);
}

class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

// Driver code

const root = new Node(1);

root.left = new Node(2);

root.right = new Node(3);

root.left.left = new Node(4);

root.left.right = new Node(5);

root.right.left = new Node(6);

root.right.right = new Node(7);

root.right.left.right = new Node(8);

root.right.right.right = new Node(9);

process.stdout.write("Vertical order traversal :- ");
verticalPrint(root, 0);

// console.log(min,max);

for (let i = min; i <= max; i++) {
  console.log(map.get(i));
}
