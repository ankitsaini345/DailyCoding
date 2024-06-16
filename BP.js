// To define structure for SLL
class Node {
  constructor(label) {
    this.label = label;
    this.next = null;
  }
}

//Graph DS
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(label) {
    const node = new Node(label);
    this.nodes.set(label, node);
  }

  addEdge(from, to) {
    if (!this.nodes.has(from)) this.addNode(from);

    if (!this.nodes.has(to)) this.addNode(to);

    this.nodes.get(from).next = this.nodes.get(to);
  }

  detectIntersection(...inputs) {
    const allNodesSet = new Set();
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
      let list = this.nodes.get(inputs[i]);
      const currentNodeSet = new Set();
      while (list) {
        const label = list.label;
        if (currentNodeSet.has(label)) break;
        currentNodeSet.add(label);

        if (allNodesSet.has(label)) return true;
        allNodesSet.add(label);

        list = list.next;
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.addEdge("a", "b");
graph.addEdge("c", "a");
graph.addEdge("r", "s");
graph.addEdge("b", "c");
graph.addEdge("x", "c");
graph.addEdge("q", "r");
graph.addEdge("y", "x");
graph.addEdge("w", "z");

// console.log(graph.nodes);

console.log(graph.detectIntersection("a", "q", "w"));
console.log(graph.detectIntersection("a", "c", "r"));
console.log(graph.detectIntersection("y", "z", "a", "r"));
console.log(graph.detectIntersection("a", "w"));
