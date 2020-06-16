// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const nums = [2, 7, 11, 15];
const target = 13;

const twoSum = (nums, target) => {
    const numsMap = new Map();

    for(let i=0; i<nums.length; i++) {
        const diff = target - nums[i];

        if(numsMap.has(diff)) {
            return [numsMap.get(diff), i];
        } else {
            numsMap.set(nums[i], i);
        }
    }

    return [];
}

console.log(twoSum(nums, target));
