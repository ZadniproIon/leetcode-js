// 3rd and final solution
// Time complexity: O(n)
// Space complexity: O(n)
var twoSum = function(nums, target) {
    const numberToIndex = {};

    for(let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];

        if(numberToIndex[numberNeeded] !== undefined) {
            return [numberToIndex[numberNeeded], i];
        }

        numberToIndex[nums[i]] = i;
    }
}


// Tutorial used:
// https://www.youtube.com/watch?v=isGKzmwDREg&ab_channel=GordonZhu
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,3], 6));