/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        let left = s.charCodeAt(i);
        let right = s.charCodeAt(j);
        if (!isChar(left)) {
            i++;
            continue;
        }
        if (!isChar(right)) {
            j--;
            continue;
        }
        if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++;
        j--;
    }
    return true;
};

const isChar = function(n) {
    return (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || (n >= 48 && n<= 57);
}

let s = "0P";

console.log((isPalindrome(s)));