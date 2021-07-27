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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const list = [];
  preorderTraversal(root, list);

  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1];
    const curr = list[i];

    prev.left = null;
    prev.right = curr;
  }
};

var preorderTraversal = (root, list) => {
  if (root != null) {
    list.push(root.val);
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);
  }
};
