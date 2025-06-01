/**
 * @param {number} x
 * @return {boolean}
 */

// second version
// Time complexity: O(log10(n)), because we process only half of the digits
// Space complexity: O(1), technically, because no extra string or array is used
var isPalindrome = function(x) {
    
    // if the number is negative and the number ends with a 0 (but isn't zero itself), we return false
    if(x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10); // because we want an integer
    }

    // first condition, for even digits integers
    // second condition, for odd digits integers, we ignore the middle digit
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};


// Examples:
/*
For x = 1221:
    - Iteration 1: reversedHalf = 1, x = 122
    - Iteration 2: reversedHalf = 12, x = 12
    - Now x === reversedHalf → 12 === 12 → ✅ Palindrome

For x = 12321:
    - reversedHalf becomes 123, x becomes 12
    - Now Math.floor(123 / 10) = 12 → 12 === 12 → ✅ Palindrome
*/