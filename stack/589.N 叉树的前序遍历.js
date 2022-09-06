//递归
/*var preorder = function(root) {
	var res = [];
	if (!root) {
		return res;
	} else {
		res.push(root.val);
		root.children &&
			root.children.forEach(item => {
				res = [...res, ...preorder(item)];
			});
	}
	return res;
};*/

var preorder = function(root) {
	if (!root) return [];

	const res = [];
	const stack = [root];

	while (stack.length) {
		const node = stack.pop();
		res.push(node.val);
		for (let i = node.children.length - 1; i >= 0; --i) {
			stack.push(node.children[i]);
		}
	}
	return res;
};
