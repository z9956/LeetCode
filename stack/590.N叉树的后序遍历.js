/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
	if (!root) return [];

	let res = [];
	let list = [root];

	while (list.length) {
		let current = list.pop();
		for (let i = 0; i < current.children.length; i++) {
			list.push(current.children[i]);
		}
		res.unshift(current.val);
	}
	return res;
};
