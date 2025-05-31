/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// classic O(n^2) solution
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            //console.log("i = " + i + " j = " + j);
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([3, 2, 4], 6));

var twoSum2 = function(nums, target) {
    const numberToIndex = {};

    for(let i = 0; i < nums.length; i++) {
        numberToIndex[nums[i]] = i;
    }

    for(let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];

        if(numberToIndex[numberNeeded] !== undefined && numberToIndex[numberNeeded] !== i) {
            return [i, numberToIndex[numberNeeded]];
        }
    }
}

console.log(twoSum2([2,7,11,15], 9));


// Tutorial used:
// https://www.youtube.com/watch?v=isGKzmwDREg&ab_channel=GordonZhu
var twoSum3 = function(nums, target) {
    const numberToIndex = {};

    for(let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];

        if(numberToIndex[numberNeeded] !== undefined) {
            return [i, numberToIndex[numberNeeded]];
        }

        numberToIndex[nums[i]] = i;
    }
}

console.log(twoSum3([2,7,11,15], 9));