class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, new Set());
  }

  removeNode(node) {
    if (this.nodes.has(node)) {
      this.nodes.delete(node);
      for (const [key, set] of this.nodes) {
        set.delete(node);
      }
    } else console.log(node + "does not exist in graph");
  }

  addEdge(from, to) {
    if (this.nodes.has(from) && this.nodes.has(to)) {
      this.nodes.get(from).add(to);
    } else console.log("given node does not exist in graph");
  }

  removeEdge(from, to) {
    if (this.nodes.has(from) && this.nodes.has(to)) {
      this.nodes.get(from).delete(to);
    } else console.log("given node does not exist in graph");
  }

  printGraph() {
    for (const [key, set] of this.nodes) {
      if (set.size) console.log(key + " is connected with " + [...set]);
    }
  }

  bfs() {
    const bfsPrint = () => {
      while (queue.length) {
        const key = queue.shift();
        if (visited.has(key)) continue;
        visited.add(key);
        answer.push(key);
        queue.push(...this.nodes.get(key));
      }
    };

    const visited = new Set();
    const queue = [];
    const answer = [];
    for (const [key] of this.nodes) {
      queue.push(key);
      bfsPrint();
    }
    console.log("BFS: ", answer);
  }

  dfs() {
    const dfsPrint = () => {
      while (stack.length) {
        const key = stack.pop();
        if (visited.has(key)) continue;
        visited.add(key);
        answer.push(key);
        stack.push(...this.nodes.get(key));
      }
    };

    const visited = new Set();
    const stack = [];
    const answer = [];
    for (const [key] of this.nodes) {
      stack.push(key);
      dfsPrint();
    }
    console.log("DFS: ", answer);
  }
  dfsRecursive() {
    const dfsR = (key) => {
      if (visited.has(key)) return;
      visited.add(key);
      answer.push(key);
      for (const nbr of this.nodes.get(key)) {
        dfsR(nbr);
      }
    };

    const visited = new Set();
    const answer = [];
    for (const [key] of this.nodes) {
      dfsR(key);
    }
    console.log("DFS Recursive: ", answer);
  }

  topologicalSort() {
    const tSort = (key) => {
      if (visited.has(key)) return;
      visited.add(key);
      for (const nbr of this.nodes.get(key)) {
        tSort(nbr);
      }
      answer.push(key);
    };

    const visited = new Set();
    const answer = [];
    for (const [key] of this.nodes) {
      tSort(key);
    }
    console.log("Topological Sort: ", answer.reverse());
  }

  detectCycle() {
    const cycle = (key) => {
      if (visited.has(key) || hasCycle) return;
      visiting.add(key);
      for (const nbr of this.nodes.get(key)) {
        if (visiting.has(nbr)) {
          hasCycle = true;
          loop.push(nbr);
          let parent = key;
          while (true) {
            loop.push(parent);
            parent = cycleMap.get(parent);
            if (!parent) break;
          }
          return;
        } else {
          cycleMap.set(nbr, key);
          cycle(nbr);
        }
      }
      visiting.delete(key);
      visited.add(key);
    };

    const visiting = new Set();
    const visited = new Set();
    const cycleMap = new Map();
    const loop = [];
    let hasCycle = false;
    for (const [key] of this.nodes) {
      cycleMap.set(key, null);
      cycle(key);
    }
    console.log("Cycle in Graph: ", hasCycle);
    console.log("Loop: ", loop.reverse());
    return hasCycle;
  }
}

const graph = new Graph();
// graph.addNode("A");
// graph.addNode("B");
// graph.addNode("C");
// graph.addNode("D");
// graph.addNode("E");
// graph.addNode("F");

// graph.addEdge("A", "B");
// graph.addEdge("A", "F");
// graph.addEdge("B", "E");
// graph.addEdge("B", "D");
// graph.addEdge("D", "F");
// graph.addEdge("C", "E");

graph.addNode("X");
graph.addNode("A");
graph.addNode("B");
graph.addNode("P");

graph.addEdge("X", "A");
graph.addEdge("X", "B");
graph.addEdge("A", "P");
graph.addEdge("B", "P");
graph.addEdge("P", "A");

graph.printGraph();
console.log();

graph.bfs();
graph.dfs();
graph.dfsRecursive();
graph.topologicalSort();
graph.detectCycle();
