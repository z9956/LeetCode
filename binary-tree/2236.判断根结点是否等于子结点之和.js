/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
	return root.left.val + root.right.val === root.val;
};
