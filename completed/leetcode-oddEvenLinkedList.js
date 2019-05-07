// _NAME: Odd Even Linked List
// _LINK: https://leetcode.com/problems/odd-even-linked-list/
// _CATEGORY: Array-Integer

/**
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function (root) {

  //if only 0
  if (root === null) return root

  //if only 1
  if (root.next === null) return root

  //if root only 2
  if (root.next.next === null) return root

  let odd = root
  let temp = root.next

  let even = root.next

  while (even.next !== null && even !== null) {

    //connect odd to the even.next
    odd.next = even.next

    //move forward odd
    odd = even.next

    even.next = odd.next

    //more forward even
    even = odd.next
  }

  odd.next = temp

  return root

};