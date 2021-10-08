/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	if (!nums.length) return null;

	const root = new TreeNode(null);

	if (nums.length > 1) {
		root.left = sortedArrayToBST(nums.splice(0, nums.length / 2));
	}

	root.val = nums[0];
	root.right = sortedArrayToBST(nums.splice(1));
	return root;
};
