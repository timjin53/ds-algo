const testData = [1,2,2,4,5,5];
const target = 2;

const lastPosition = function (nums, target) {
    // write your code here
    let start = 0;
    let end = nums.length - 1;
    let lastTargetIndex = -1;
    
    while( start + 1 < end) {
        const mid = Math.floor((start + end)/2);
        console.log(start, end, mid)
        console.log(target, nums[mid])
        
        if(target < nums[mid]) {
            end = mid;
        } else if (target > nums[mid]) {
            start = mid
        } else {
            return mid
        }
    }
    
    return lastTargetIndex;
}

lastPosition(testData, target);
