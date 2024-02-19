/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if(ch === '(' || ch === '[' || ch === '{')
            arr.push(ch);
        else {
            if(ch === ')' && arr[arr.length-1] === '(')
                arr.pop();
            else if(ch === '}' && arr[arr.length-1] === '{')
                arr.pop();
            else if(ch === ']' && arr[arr.length-1] === '[')
                arr.pop();
            else return false;
        }
    }
    return arr.length === 0;
};