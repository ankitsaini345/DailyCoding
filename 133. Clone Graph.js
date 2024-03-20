/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;
    const map = new Map();
    const queue = [];
    queue.push(node);
    let answer;
    while(queue.length) {
        let oldNode = queue.shift();
        let newNode = map.get(oldNode.val) || new Node(oldNode.val);
        map.set(newNode.val, newNode);
        if(!answer) answer = newNode;
        for (let i = 0; i < oldNode.neighbors.length; i++) {
            const neighbor = oldNode.neighbors[i];
            if(map.has(neighbor.val)) {
                newNode.neighbors.push(map.get(neighbor.val))
            } else {
                queue.push(neighbor)
                let tempNode = new Node(neighbor.val)
                newNode.neighbors.push(tempNode)
                map.set(neighbor.val, tempNode)
            }
        }
    }
    return answer;
};