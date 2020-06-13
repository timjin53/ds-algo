const words = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];


// O(n*k*klogk)
// Can be reduced to O(n*k*k) if use a linked list instead of sorting and pop for each addition
// Can be reduced to O(n*klogk) if we you a priority queue (min stack) as we adding from map.
const topKFrequentWords = (words, k) => {
    const wordCountMap = new Map();
    const topKFrequentWords = [];

    words.forEach(word => {
        if(wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });

    for(const key of wordCountMap.keys()) {
        topKFrequentWords.push({ key, count: wordCountMap.get(key)});
        topKFrequentWords.sort(countComparator);
        if(topKFrequentWords.length > k) topKFrequentWords.pop();
    }

    return topKFrequentWords;
};

const countComparator = (prev, next) => next.count - prev.count;

console.log(topKFrequentWords(words, 2));
console.log(topKFrequentWords(words, 0));
console.log(topKFrequentWords(words, 1));
console.log(topKFrequentWords(words, 1));
console.log(topKFrequentWords(words, 1));
