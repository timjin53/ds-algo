// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
// Note:
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

const s = "ADOBECODEBANC";
const t = "ABC";
// Output: "BANC"

// const s = "aa";
// const t = "a";
// Output: ""


// TODO: complexity too high....
const minimalWindowSubstring = (s, t) => {
    const targetMap = new Map();
    t.split('').forEach(char => {
        if(targetMap.has(char)) {
            targetMap.set(char, targetMap.get(char) + 1);
        } else {
            targetMap.set(char, 1)
        }
    });
    let foundMap = new Map(targetMap);

    let start = 0;
    let end = 0;
    const result = {
        start,
        end,
        length: Number.MAX_SAFE_INTEGER
    };

    while(end <= s.length) {
        if(foundMap.size === 0) {
            while(!targetMap.has(s.charAt(start))) {
                start++;
            }

            if(end - start < result.length) {
                result.length = end - start;
                result.start = start;
                result.end = end;
            }

            foundMap = new Map(targetMap);
            start++;

            while(!targetMap.has(s.charAt(start)) && start <= end) {
                start++;
            }
            end = start;
        }

        const endChar = s.charAt(end);
        if(targetMap.has(endChar) && foundMap.has(endChar)) {
            if(foundMap.get(endChar) === 1) {
                foundMap.delete(endChar);
            } else {
                foundMap.set(endChar, foundMap.get(endChar) - 1);
            }
        }
        end++;
    }

    return s.substring(result.start, result.end);
}

// minimalWindowSubstring(s, t);
console.log(minimalWindowSubstring(s, t));
