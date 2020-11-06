// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

const subsets = nums => {
    const results = [];

    dfs(nums, 0, [], results);

    return results;
}

const dfs = (nums, index, subset, results) => {
    // console.log(index, subset, results);
    if (index === nums.length) {
        results.push(subset.concat([]));
        return;
    }

    subset.push(nums[index]);
    dfs(nums, index + 1, subset, results);

    console.log(subset.pop(), '-');
    dfs(nums, index + 1, subset, results);
}

// BFS
// const subsets2 = nums => {
//     const queue = [[]];
//     let startIndex = 0;

//     while(queue.length > 0) {
//         const currentSubset = queue.pop();
//         const currentResult = [];

//         currentResult.push(currentSubset);


//     }
// }

const testData = [1, 2, 3];

subsets(testData);
