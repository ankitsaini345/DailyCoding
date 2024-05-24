
class Graph {
    constructor() {
      this.nodes = new Map();
    }
  
    addNode(node) {
      this.nodes.set(node, new Set());
    }
  
    addEdge(from, to) {
      if (this.nodes.has(from) && this.nodes.has(to)) {
        this.nodes.get(from).add(to);
      } else console.log("given node does not exist in graph");
    }

    detectCycle() {
        const cycle = (key) => {
          if (visited.has(key) || hasCycle) return;
          visiting.add(key);
          for (const nbr of this.nodes.get(key)) {
            if (visiting.has(nbr)) {
              hasCycle = true;
              return;
            }
            cycle(nbr);
          }
          visiting.delete(key);
          visited.add(key);
        };
    
        const visiting = new Set();
        const visited = new Set();
        let hasCycle = false;
        for (const [key] of this.nodes) {
          cycle(key);
        }
        return hasCycle;
      }

    topologicalSort() {
        if(this.detectCycle()) return [];

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
        return answer.reverse();
      }
  }
  
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = new Graph();
    for (let i = 0; i < numCourses; i++) {
      graph.addNode(i);
    }
    for (let i = 0; i < prerequisites.length; i++) {
      graph.addEdge(prerequisites[i][1], prerequisites[i][0]);
    }
    return graph.topologicalSort();
  };
  