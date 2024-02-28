/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let map = {};

    for(char of s) {
        if (map.hasOwnProperty(char))
            map[char] = map[char] + 1;
        else 
        map[char] = 1
    }

    for(char of t) {
        if(!map[char] || map[char] <= 0) return false;
        map[char] = map[char] - 1; 
    }

    return true;
};

console.log(isAnagram('rat', 'car'));