// _NAME: Middle of Linked list
// _LINK: https://leetcode.com/problems/middle-of-the-linked-list/
// _CATEGORY: Linked List

/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {

  let turtle = head
  let hare = head

  while (true) {

    if (hare.next === null) return turtle
    if (hare.next.next === null) return turtle.next
    hare = hare.next.next
    turtle = turtle.next
  }
};
