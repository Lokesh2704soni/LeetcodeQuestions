/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums);
    let arr = Array.from(set).sort((a, b) => b - a);
    return arr.length < 3 ? arr[0] : arr[2];
};