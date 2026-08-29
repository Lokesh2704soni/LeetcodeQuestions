/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num === 0) return "0";
    if(num < 0) {
        num = 0xFFFFFFFF + num + 1;
    }
    let hex = "";
    while(num > 0){
        let reminder = num % 16;
        if(reminder < 10){
            hex = reminder + hex;
        }
        else {
            hex = String.fromCharCode(97 + reminder -10) + hex;
        }
        num = Math.floor(num / 16);
    }
    return hex;
};