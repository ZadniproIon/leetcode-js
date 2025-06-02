/**
 * @param {string} s
 * @return {string}
 */

// second version
// from https://www.youtube.com/watch?v=XYQecbcd6_c&ab_channel=NeetCode
// Time complexity: O(n^2)
// Space complexity: O(1)

var longestPalindrome = function(s) {

    let l_of_result = 0;
    let r_of_result = 0;
    let length_of_result = 0;

    for(let i = 0; i < s.length; i++) {
        
        // check for odd length
        let l = i;
        let r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > length_of_result) {
                l_of_result = l;
                r_of_result = r;
                length_of_result = r - l + 1;
            }

            l--;
            r++;
        }

        // check for even length
        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > length_of_result) {
                l_of_result = l;
                r_of_result = r;
                length_of_result = r - l + 1;
            }

            l--;
            r++;
        }
    }


    return s.substring(l_of_result, r_of_result + 1);
    
};

console.log(longestPalindrome("cbbbbd"));