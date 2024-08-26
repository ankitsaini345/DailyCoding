/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion1 = function (s1, s2) {
    const charFrequencies = new Array(26).fill(0);
    const charFrequencies2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        const pos = s1.charCodeAt(i) - 97
        charFrequencies[pos]++;
    }

    const str1 = charFrequencies.join();
    let str2;
    for (let i = 0; i < s1.length; i++) {
        const pos = s2.charCodeAt(i) - 97
        charFrequencies2[pos]++;
    }
    str2 = charFrequencies2.join();
    if (str1 === str2) return true;

    let prev = 0;
    for (let i = s1.length; i < s2.length; i++) {
        const prevPos = s2.charCodeAt(prev++) - 97
        const currPos = s2.charCodeAt(i) - 97
        charFrequencies2[prevPos]--;
        charFrequencies2[currPos]++;

        str2 = charFrequencies2.join();
        if (str1 === str2) return true;
    }
    return false;
};


var checkInclusion = function (s1, s2) {

    function compare(map1, map2) {
        for (const [ch, count] of map1) {
            if (count !== map2.get(ch)) return false;
        }
        return true;
    }

    if (s1.length > s2.length) return false;

    const map1 = new Map()
    const map2 = new Map()


    let matchCount = 0;

    for (let ch of s1)
        map1.set(ch, (map1.get(ch) || 0) + 1)

    for (let i = 0; i < s1.length; i++) {
        let ch = s2[i]
        map2.set(ch, (map2.get(ch) || 0) + 1)
    }
    if (compare(map1, map2)) return true;

    if (matchCount == map1.size) return true;
    let leftPos = 0
    for (let i = s1.length; i < s2.length; i++) {
        let leftCh = s2[leftPos++];
        map2.set(leftCh, map2.get(leftCh) - 1);

        let rightCh = s2[i];
        map2.set(rightCh, (map2.get(rightCh) || 0) + 1)
        if (compare(map1, map2)) return true;
    }
    return false;
};


// const s1 = "ab", s2 = "eidbbaooo";
// const s1 = "ab", s2 = "eidbboaooo";
const s1 = "a", s2 = "ab";
// const s1 = "hello", s2 = "ooolleoooleh";

console.log(checkInclusion(s1, s2));