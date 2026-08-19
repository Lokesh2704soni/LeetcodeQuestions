/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = new Map();
    let mapTS = new Map();
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) {
                return false;
            }
        } else {
            mapST.set(charS, charT);
        }
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) {
                return false;
            }
        } else {
            mapTS.set(charT, charS);
        }
    }
    return true;
};