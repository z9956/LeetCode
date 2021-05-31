/**
 * @param {number[]} nums
 * @return {number}
 */
// 有序列表，原地修改，双指针比对
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
