/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0) return 0;
    let left = 1, right = x;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid === Math.floor(x / mid)){
            return mid;
        }
        if(mid < x / mid){
            left = mid + 1;
        }        else{
            right = mid-1;
        }    
    }
    return left -1;
};