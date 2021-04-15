/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0;
  let maxAns = nums[0];

  nums.forEach(val => {
    if (sum > 0) {
      sum += val;
    } else {
      sum = val;
    }
    maxAns = Math.max(sum, maxAns);
  })
  return maxAns;
};
