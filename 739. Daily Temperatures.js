/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const output = new Array(temperatures.length);
    // stack.push({val:  temperatures[0], in: 0});
    for (let i = 0; i < temperatures.length; i++) {
        const el = temperatures[i];
        while(stack.length && el > stack[stack.length-1].val) {
            const prevEl = stack.pop();
            output[prevEl.in] = i - prevEl.in;
        }
        stack.push({val: el, in: i})
    }
    
    while(stack.length) {
        const prevEl = stack.pop();
        output[prevEl.in] = 0;
    }

    return output;
};

const temperatures = [73,74,75,71,69,72,76,73];

console.log(dailyTemperatures(temperatures));