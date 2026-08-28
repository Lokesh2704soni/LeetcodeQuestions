/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let result = false;
    if(n > 0){
        let log4 = Math.log(n) / Math.log(4);
        result = log4 === Math.floor(log4);
    }
    return result;
};