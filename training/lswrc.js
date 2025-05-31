// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let longestStr = 0;
    let set = new Set();

    let left = 0;
    let right = 0;

    while (right < s.length) {

        let letter = s[right];

        if(!set.has(letter)) {
            set.add(letter);
            longestStr = Math.max(longestStr, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }

    return longestStr;
};


// Tutorial used:
// https://www.youtube.com/watch?v=i1edO6FkGm0&ab_channel=AlgoJS

s = "abcabcbb";
console.log(s + " " + lengthOfLongestSubstring(s));

s = "bbbbb";
console.log(s + " " + lengthOfLongestSubstring(s));

s = "pwwkew";
console.log(s + " " + lengthOfLongestSubstring(s));