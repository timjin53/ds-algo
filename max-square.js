const data = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
// Input: 
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

// brute force
const maxSquare = matrix => {
    let max = 0;

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            const currentMax = getMaxHelper(matrix, row, col);

            if(currentMax > max) {
                max = currentMax;
            }
        }
    }

    return max;
};

const getMaxHelper = (matrix, row, col) => {
    if(matrix[row][col] === "0") {
        return 0;
    }

    let max = 1;
    let range = 1;

    while(row+range < matrix.length && col + range < matrix[0].length) {
        for(let i=col; i<=col+range; i++) {
            if(matrix[row+range][i] === "0") return max;
        }

        for(let i=row; i<=row+range; i++) {
            if(matrix[i][col+range] === "0") return max;
        }

        range++;
        max = (range)*(range);
    }

    return max;
}


// console.log(getMaxHelper(data, 1, 2))
// console.log(maxSquare(data));


const maxSquareDp = matrix => {
    const memo = new Map();
    let max = 0;

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            const left = memo.has(`${row-1}/${col}`) ? memo.get(`${row-1}/${col}`) : 0;
            const up = memo.has(`${row}/${col-1}`) ? memo.get(`${row}/${col-1}`) : 0;
            const upleft = memo.has(`${row-1}/${col-1}`) ? memo.get(`${row-1}/${col-1}`) : 0;
            const minAmong = Math.min(left, up, upleft);
            const currentMax =  matrix[row][col] === "0" ? 0 : minAmong + 1;
            memo.set(`${row}/${col}`, currentMax);

            if(currentMax > max) max = currentMax;
        }
    }

    return max*max;
}

const testData = [["1","0","1","1","0","1"],["1","1","1","1","1","1"],["0","1","1","0","1","1"],["1","1","1","0","1","0"],["0","1","1","1","1","1"],["1","1","0","1","1","1"]]

console.log(maxSquareDp(testData));

