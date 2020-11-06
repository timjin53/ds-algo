/**
 * @param grid: a boolean 2D matrix
 * @return: an integer
 */
const numIslands = function (grid) {
    const visited = new Set();
    let count = 0;
    
    // write your code here
    for(let i = 0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] == 1 && !visited.has(i+"/"+j)) {
                count++;
                visited.add(i+"/"+j);
                
                bfs(grid, i, j, visited);
            }
        }
    }
    
    return count;
}

const bfs = (grid, i, j, visited) => {
    const queue = [[i, j]];
    
    while(queue.length > 0) {
        const current = queue.shift();
        const row = current[0];
        const col = current[1];
        
        if(row - 1 >= 0 && grid[row-1][col] == 1 && !visited.has((row-1)+"/"+col)) {
            visited.add((row-1)+"/"+col);
            queue.push([row-1, col]);
        }
        if(row + 1 < grid.length && grid[row+1][col] == 1 && !visited.has((row+1)+"/"+col)) {
            visited.add((row+1)+"/"+col);
            queue.push([row+1, col]);
        }
        if(col - 1 >= 0 && grid[row][col-1] == 1 && !visited.has(row+"/"+(col-1))) {
            visited.add(row+"/"+(col-1));
            queue.push([row, col-1]);
        }
        if(col + 1 < grid[0].length && grid[row][col+1] == 1 && !visited.has(row+"/"+(col+1))) {
            visited.add(row+"/"+(col+1));
            queue.push([row, col+1]);
        }
    }
}

const testData = [[1,1,0,0,0],[0,1,0,0,1],[0,0,0,1,1],[0,0,0,0,0],[0,0,0,0,1]];

console.log(numIslands(testData));