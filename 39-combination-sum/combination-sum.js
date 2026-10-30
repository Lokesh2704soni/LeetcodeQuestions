/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const current = [];
    const dfs = (start, sum) => {
        if (sum === target) {
            result.push([...current]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                current.push(candidates[i]);
                dfs(i, sum + candidates[i]);
                current.pop();
            }
        }
    };
    dfs(0, 0);
    return result;
};