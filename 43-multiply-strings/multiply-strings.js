/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m = num1.length, n = num2.length;
    let pos = new Array(m + n).fill(0);
    if (num1 === "0" || num2 === "0") return "0";
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let p1 = i + j, p2 = i + j + 1;
            let sum = mul + pos[p2];
            pos[p1] += Math.floor(sum / 10);
            pos[p2] = sum % 10;
        }
    }
    let result = "";
    for (let i = 0; i < pos.length; i++) {
        if (!(result === "" && pos[i] === 0)) {
            result += pos[i];
        }
    }
    return result || "0";
};