const search = function (A, target) {
    const rotatePosition = getRotatePosition(A);
    let end = A.length - 1;

    if(target <= A[end]) {
        return binarySearch(A, rotatePosition, end, target);
    } else {
        return binarySearch(A, 0, rotatePosition - 1, target);
    }
}

const getRotatePosition = A => {
    let start = 0;
    let end = A.length - 1;
    
    while(start + 1 < end) {
        const mid = Math.floor(start + (end-start)/2);
        
        if(A[mid] > A[end]) {
            start = mid
        } else {
            end = mid
        }
    }
    
    return A[start] < A[end] ? start : end;
}

const binarySearch = (A, start, end, target) => {
    while(start + 1 < end) {
        const mid = Math.floor(start + (end-start)/2);
        
        if(target < A[mid]) {
            end = mid;
        } else {
            start = mid;
        }
    }
    
    if(A[start] === target) return start;
    if(A[end] === target) return end;
    
    return -1;
}

const arr = [4,1,2,3]
const target = 3;

console.log(search(arr, target));

const search2 = (A, target) => {
    let start = 0;
    let end = A.length - 1;

    while(start + 1 < end) {
        const mid = Math.floor((start + end)/2);

        if(A[mid] <= A[start]) {
            if(A[mid] <= target && target <= A[end]) {
                start = mid;
            } else {
                end = mid;
            }
        } else {
            if(target >= A[start] && target <= A[mid]) {
                end = mid;
            } else {
                start = mid;
            }
        }
    }

    if(A[start] === target) return start;
    if(A[end] === target) return end;

    return -1;
}

