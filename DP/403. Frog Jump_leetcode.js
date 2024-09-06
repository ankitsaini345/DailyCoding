/**
 * @param {number[]} stones
 * @return {boolean}
 */

//Wrong Implementation
var canCross = function (stones) {
    let map = new Map(stones.map(stone => [stone, new Set()]));
    map.get(stones[0]).add(1);

    for (let i = 0; i < stones.length; i++) {
        let set = map.get(stones[i]);

        for (const k of set) {
            let newStone = k + stones[i];
            if (map.has(newStone)) {
                if (newStone === stones[stones.length - 1])
                    return true;
                map.get(newStone).add(k);
                map.get(newStone).add(k + 1);
                if (k - 1 > 0)
                    map.get(newStone).add(k - 1);
            }
        }

    }
    return false;
};

// const stones = [0, 1, 3, 6, 7];
// const stones = [0, 1, 3, 5, 6, 8, 12, 17];
const stones = [0,1,2,3,4,8,9,11]

console.log(canCross(stones));