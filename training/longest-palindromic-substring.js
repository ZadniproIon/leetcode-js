/**
 * @param {string} s
 * @return {string}
 */


// firstly, let's do it in the most basic way
// P.S.: not fast enough
// Time complexity: O(n^3)

var isPalindrome2 = (s) => s === s.split('').reverse().join('');

var longestPalindrome = function(s) {

    if(s.length < 2) {
        return s;
    }

    let longestSubstring = '';
    let longestSubstringLength = 0;

    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let currentSubstring = s.substring(i, j);

            if(isPalindrome2(currentSubstring) && currentSubstring.length > longestSubstringLength) {
                longestSubstring = currentSubstring;
                longestSubstringLength = currentSubstring.length;
            }
        }
    }

    return longestSubstring;
};

console.log(longestPalindrome("bb"));

// function to verify if a string is palindrome or not
const isPalindrome = (s) => {
    
    let i = 0;
    let j = s.length - 1;
    
    while(i !== j) {
        if(s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

//console.log(isPalindrome("wakaw"));

// shorter way to check for if a string is palindrome


//console.log(isPalindrome2("wakaw"));