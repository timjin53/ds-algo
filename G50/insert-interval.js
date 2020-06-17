// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

const intervals = [[1,5], [7, 9]];
const newInterval = [2, 6];

// nlogn, looks not necessary to sort
const insertIntervalTwo = (intervals, newInterval) => {
    const intervalsForMerge = intervals.concat([newInterval]).sort((prev, next) => prev[0] - next[0]);
    const result = [];

    for(const interval of intervalsForMerge) {
        if(result && result.length !== 0) {
            const lastInsert = result.pop();

            if(interval[0] <= lastInsert[1]) {
                result.push([lastInsert[0], Math.max(lastInsert[1], interval[1])]);
            } else {
                result.push(lastInsert);
                result.push(interval);
            }
        } else {
            result.push(interval);
        }
    }

    return result;
}

// should be O(n)
const insertIntervalOne = (intervals, newInterval) => {
    if(intervals === null || intervals.length === 0) return [newInterval];
    
    let insertIndex = 0;
    for(const interval of intervals) {
        if(interval[0] >=  newInterval[0]) {
            break;
        }
        insertIndex++;
    }

    const intervalsToMerge = intervals.map(x => x);
    intervalsToMerge.splice(insertIndex, 0, newInterval);

    const result = [];

    for(const interval of intervalsToMerge) {
        if(result && result.length !== 0) {
            const lastInsert = result.pop();

            if(interval[0] <= lastInsert[1]) {
                result.push([lastInsert[0], Math.max(lastInsert[1], interval[1])]);
            } else {
                result.push(lastInsert);
                result.push(interval);
            }
        } else {
            result.push(interval);
        }
    }

    return result;
}

console.log(insertIntervalTwo(intervals, newInterval));
console.log(insertIntervalOne(intervals, newInterval));
