/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for (str of strs) {
        let tmpArr = new Array(26).fill(0);
        for (let i=0; i< str.length; i++) {
            tmpArr[str.charCodeAt(i) - 97]++;
        }
        let sortedStr = tmpArr.join();
        if(map.hasOwnProperty(sortedStr)) {
            map[sortedStr].push(str);
        } else {
            map[sortedStr] = [str]
        }
    }
    let res = [];
    for (key in map) {
        res.push(map[key])
    }

    return res;
};

let strs =
["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs));