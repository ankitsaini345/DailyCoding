/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const posSpeed = [];
  const stack = [];
  for (let i = 0; i < position.length; i++) {
    posSpeed.push([position[i], speed[i]]);
  }
  posSpeed.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < posSpeed.length; i++) {
    const eta = (target - posSpeed[i][0]) / posSpeed[i][1];
    if (stack.length && stack[stack.length - 1] >= eta) continue;
    stack.push(eta);
  }
  return stack.length;
};

const target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));
