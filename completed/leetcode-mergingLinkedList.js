// _NAME: Merge Two Sorted Lists
// _LINK: https://leetcode.com/problems/merge-two-sorted-lists/
// _CATEGORY: Linked List

/**

Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the 
first two lists.

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let node1 = new ListNode(-9);
let node2 = new ListNode(3);

let node4 = new ListNode(5);
let node5 = new ListNode(7);

node1.next = node2;

node4.next = node5;

var mergeTwoLists = function(l1, l2) {
  let curr1;
  let curr2;

  let head;
  let output;

  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    output = new ListNode(l1.val);
    head = output;

    curr1 = l1.next;
    curr2 = l2;
  } else {
    output = new ListNode(l2.val);
    head = output;

    curr2 = l2.next;
    curr1 = l1;
  }

  while (curr1 != null && curr2 != null) {
    if (curr1.val < curr2.val) {
      output.next = new ListNode(curr1.val);
      curr1 = curr1.next;
    } else {
      output.next = new ListNode(curr2.val);
      curr2 = curr2.next;
    }

    output = output.next;
  }

  while (curr1) {
    output.next = new ListNode(curr1.val);
    curr1 = curr1.next;
    output = output.next;
  }

  while (curr2) {
    output.next = new ListNode(curr2.val);
    curr2 = curr2.next;
    output = output.next;
  }

  printNums(head);
  return head;
};

var printNums = function(head) {
  let curr = head;

  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
};

console.log(mergeTwoLists(node1, node4));
//console.log(printNums(node4));
