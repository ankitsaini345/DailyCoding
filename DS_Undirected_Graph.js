const {
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

class WeightedGraph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, new Set());
  }

  addEdge(from, to, weight) {
    if (!this.nodes.has(from) || !this.nodes.has(to)) return;
    this.nodes.get(from).add({ label: to, weight });
    this.nodes.get(to).add({ label: from, weight });
  }

  shortestPathDijkstra(fromLabel, toLabel) {
    const findDist = (currentNodeLabel) => {
      let shortestDistNodeWeight = Number.MAX_SAFE_INTEGER;
      let shortestDistNodeLabel = null;
      for (const { label, weight } of this.nodes.get(currentNodeLabel)) {
        if (visited.has(label)) continue;
        if (weight < shortestDistNodeWeight) {
          shortestDistNodeWeight = weight;
          shortestDistNodeLabel = label;
        }
        if (
          distanceMap.get(label) >
          distanceMap.get(currentNodeLabel) + weight
        ) {
          distanceMap.set(label, distanceMap.get(currentNodeLabel) + weight);
          previousMap.set(label, currentNodeLabel);
        } else {
        }
      }
      visited.add(currentNodeLabel);
      if (shortestDistNodeLabel) findDist(shortestDistNodeLabel);
    };
    const distanceMap = new Map();
    const previousMap = new Map();
    const visited = new Set();

    for (const [key, value] of this.nodes) {
      distanceMap.set(key, Number.MAX_SAFE_INTEGER);
    }
    distanceMap.set(fromLabel, 0);
    previousMap.set(fromLabel, null);
    findDist(fromLabel);
    for (const [key, value] of this.nodes) {
      findDist(key);
    }
    console.log(distanceMap);
    console.log(previousMap);
  }

  printGraph() {
    for (const [key, set] of this.nodes) {
      if (set.size) {
        let temp = [...set];
        temp.map((edge) =>
          console.log(
            key +
              " is connected with " +
              edge.label +
              " with weight " +
              edge.weight
          )
        );
      }
    }
  }

  minimumSpanningTree(nodeLabel) {
    const minSpan = (nodeLabel) => {
      visited.add(nodeLabel);
      if(visited.size === this.nodes.size) return;
      
      for (const neighbour of this.nodes.get(nodeLabel)) {
        if(!visited.has(neighbour.label)) {
          weightQueue.enqueue(neighbour);
        }
      }
      let currentNode;
      do {
        currentNode = weightQueue.pop();
      } while(visited.has(currentNode.label))
      console.log(nodeLabel + ' to ' + currentNode.label + ' weight ' + currentNode.weight);
      minSpan(currentNode.label);
    }
    const weightQueue = new MinPriorityQueue((item) => item.weight)
    const visited = new Set();
    minSpan(nodeLabel);
  }
}

const wg = new WeightedGraph();
wg.addNode("A");
wg.addNode("B");
wg.addNode("C");
wg.addNode("D");

wg.addEdge("A", "B", 3);
wg.addEdge("A", "C", 1);
wg.addEdge("B", "C", 2);
wg.addEdge("B", "D", 4);
wg.addEdge("C", "D", 5);
// wg.printGraph();
// wg.shortestPathDijkstra("A", "C");

wg.minimumSpanningTree("A");

