/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0;
  let right = 0;

  while (left < nums.length) {
    if (nums[left] !== 0) {
      [nums[left], nums[right] ] = [nums[right], nums[left]];
      left++;
      right++;
    } else {
      left++;
    }
  }
};

/**
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * */

