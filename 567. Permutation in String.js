/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
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
    if(str1 === str2) return true;

    let prev = 0;
    for (let i = s1.length; i < s2.length; i++) {
        const prevPos = s2.charCodeAt(prev++) - 97
        const currPos = s2.charCodeAt(i) - 97
        charFrequencies2[prevPos]--;  
        charFrequencies2[currPos]++;  

        str2 = charFrequencies2.join();
        if(str1 === str2) return true;
    }
   return false;
};

const  s1 = "ab", s2 = "eidbaooo";

console.log(checkInclusion(s1,s2));