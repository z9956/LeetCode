/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = root => {
	const res = new TreeNode(-1);
	let resNode = res;
	const inOrder = root => {
		if (!root) return;
		inOrder(root.left);
		resNode.right = root;
		root.left = null;
		resNode = root;
		inOrder(root.right);
	};
	inOrder(root);
	return res.right;
};
