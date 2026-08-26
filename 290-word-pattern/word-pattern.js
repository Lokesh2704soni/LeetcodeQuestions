/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if(pattern.length !== words.length){
        return false;
    }
    let patternToWord =new Map();
    let wordToPattern = new Map();

    for(let i = 0; i < pattern.length; i++){
        let char = pattern[i];
        let word = words[i];

        if(patternToWord.has(char) && patternToWord.get(char) !== word){
            return false;
        }
        if(wordToPattern.has(word) && wordToPattern.get(word) !== char){
            return false;
        }
        patternToWord.set(char, word);
                wordToPattern.set(word, char);
    }
    return true;
};