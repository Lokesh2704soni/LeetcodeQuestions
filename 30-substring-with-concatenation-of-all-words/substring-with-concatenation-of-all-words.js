/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    if (!s || !words || words.length === 0) {
        return result;
    }
    const wordLen = words[0].length;
    const wordCount = words.length;
    const strLen = s.length;
    if (strLen < wordLen * wordCount) {
        return result;
    }
    const wordMap = new Map();
    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let count = 0;
        const tempMap = new Map();
        for (let j = i; j <= strLen - wordLen; j += wordLen) {
            const word = s.substring(j, j + wordLen);
            if (wordMap.has(word)) {
                tempMap.set(word, (tempMap.get(word) || 0) + 1);
                if (tempMap.get(word) <= wordMap.get(word)) {
                    count++;
                }
                while (count === wordCount) {
                    if (j - left + wordLen === wordCount * wordLen) {
                        result.push(left);
                    }
                    const leftWord = s.substring(left, left + wordLen);
                    if (wordMap.has(leftWord)) {
                        tempMap.set(leftWord, tempMap.get(leftWord) - 1);
                        if (tempMap.get(leftWord) < wordMap.get(leftWord)) {
                            count--;
                        }
                    }
                    left += wordLen;
                }
            } else {
                tempMap.clear();
                count = 0;
                left = j + wordLen;
            }
        }
    }
    return result;
};