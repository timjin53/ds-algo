// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const nums = [7, 11, 15, 2];
const target = 13;

// O(n). space time
const twoSumOne = (nums, target) => {
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


// If we do not want use extra space and does not want index returned but value
// can sort the array inplace O(nlogn) then use two pointer, but if we need index then
// we have to record original index, which is O(n) on space as well....
const twoSumTwo = (nums, target) => {
    const sortedNums = nums.map((x, index) => ({
        value: x,
        index
    })).sort((prev, next) => prev.value - next.value);

    let start = 0;
    let end = sortedNums.length - 1;

    while(start < end) {
        const currentSum = sortedNums[start].value + sortedNums[end].value;
        if( currentSum === target) return [sortedNums[start].index, sortedNums[end].index];
        
        if(sortedNums[start].value + sortedNums[end].value < target) start++;
        else end--;
    }

    return [];
}

console.log(twoSumOne(nums, target));
console.log(twoSumTwo(nums, target));

