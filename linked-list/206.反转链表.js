/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
};

var reverseListTwo = (head) => {
  let prev = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = prev;

    prev = cur;
    cur = next;
  }

  return prev;
};

/*
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * */
