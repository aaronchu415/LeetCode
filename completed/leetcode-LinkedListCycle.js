// _NAME: Linked List Cycle
// _LINK: https://leetcode.com/problems/linked-list-cycle/
// _CATEGORY: Linked List

/**

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
n = 15,
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

  if (!head) return false
  if (head.next === null) return false

  let turtle = head
  let rabbit = head

  do {
    turtle = turtle.next
    rabbit = rabbit.next.next

    if (rabbit === turtle) return true

  } while (rabbit !== null && rabbit.next !== null)

  return false

};
