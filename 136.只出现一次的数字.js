/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = 0;
  for(let i = 0; i < nums.length; i++){
    ans ^= nums[i];
  }
  return ans;
};


/**
 * 任何数和 00 做异或运算，结果仍然是原来的数，即 a⊕0 = a
 * 任何数和其自身做异或运算，结果是 0，即 a⊕a = 0。
 *
 * Example
 * 输入: [2,2,1]
 * 输出: 1
 *
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * */
