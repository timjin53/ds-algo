const combinationSum2 = function (num, target) {
    // write your code here
    const result = [];
    
    num.sort((prev, next) => prev - next);
    
    dfs(num, target, 0, [], result);

    console.log(result)
    
    return result;
}

const dfs = (num, target, index, path, result) => {
    if(index === num.length || target < 0) return;

    console.log(target, path)

    if(target === 0) {
        result.push(path.map(x => x));
    }
    
    path.push(num[index]);
    dfs(num, target - num[index], index + 1, path, result);
    path.pop();
    dfs(num, target - num[index], index + 1, path, result);
}

const num = [7,1,2,5,1,6,10];
const target = 8;

combinationSum2(num, target);
