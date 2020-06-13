// Get top k frequent word from a infinite stream

const words = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];

const topKFrequentWordsInfinite = (words, k) => {
    const wordCountMap = new Map();
    const topKFrequentWordsMap = new Map();

    words.forEach(word => {
        let count = 1;
        if (wordCountMap.has(word)) {
            count = wordCountMap.get(word) + 1
        }
        wordCountMap.set(word, count);

        topKFrequentWordsMap.set(word, count);

        if(topKFrequentWordsMap.size > k) {
            let leastKey = ""
            let leastCount = Number.MAX_SAFE_INTEGER;

            for(const key of topKFrequentWordsMap.keys()) {
                if(topKFrequentWordsMap.get(key) <= leastCount) {
                    leastKey = key;
                    leastCount = topKFrequentWordsMap.get(key);
                }
            }

            topKFrequentWordsMap.delete(leastKey);
        }

        console.log(topKFrequentWordsMap);
    });
};

topKFrequentWordsInfinite(words, 0);
topKFrequentWordsInfinite(words, 1);
topKFrequentWordsInfinite(words, 2);
topKFrequentWordsInfinite(words, 3);
topKFrequentWordsInfinite(words, 4);
