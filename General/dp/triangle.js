// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// Input the following triangle:
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// Output: 11
// 2 + 3 + 5 + 1 = 11

const triangle = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
];

// traverse
// const minPathSumOfTriangle = triangle => {
//     let minPathSum = { value: Number.MAX_SAFE_INTEGER };

//     getMinPathSum(triangle, 0, 0, 0, minPathSum);

//     return minPathSum.value
// }

// const getMinPathSum = (triangle, row, column, currentMinSum, minPathSum) => {
//     if (row === triangle.length - 1) {
//         minPathSum.value = Math.min(triangle[row][column] + currentMinSum, minPathSum.value);
//     } else {
//         getMinPathSum(triangle, row + 1, column, currentMinSum + triangle[row][column], minPathSum);
//         getMinPathSum(triangle, row + 1, column + 1, currentMinSum + triangle[row][column], minPathSum);
//     }
// }

// console.log(minPathSumOfTriangle(triangle));

// divide and conquer
// const minPathSumOfTriangle = triangle => {
//     return minPathSumOfTriangleHelper(triangle, 0, 0);
// }

// const minPathSumOfTriangleHelper = (triangle, row, column) => {
//     if(row === triangle.length) {
//         return 0;
//     }

//     return Math.min(
//         minPathSumOfTriangleHelper(triangle, row + 1, column),
//         minPathSumOfTriangleHelper(triangle, row + 1, column + 1)
//     ) + triangle[row][column];
// }

// console.log(minPathSumOfTriangle(triangle));

// divide and conquer with memoization
const minPathSumOfTriangle = triangle => {
    const memo = new Map();

    return minPathSumOfTriangleHelper(triangle, 0, 0, memo);
}

const minPathSumOfTriangleHelper = (triangle, row, column, memo) => {
    if(row === triangle.length) {
        return 0;
    }

    const key = getMapKey(row, column)
    if(memo.has(key)) return memo.get(key);

    memo.set(
        key, 
        Math.min(
            minPathSumOfTriangleHelper(triangle, row + 1, column, memo),
            minPathSumOfTriangleHelper(triangle, row + 1, column + 1, memo)
        ) + triangle[row][column]);

    return memo.get(key);
}

const getMapKey = (row, column) => `${row}-${column}`;

console.log(minPathSumOfTriangle(triangle));

