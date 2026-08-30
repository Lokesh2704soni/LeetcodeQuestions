/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    const numSet = new Set(nums);

    for(let i = 1; i<= nums.length; i++){
        if(!numSet.has(i)){
 result.push(i);
        }
    }
    return result;
};