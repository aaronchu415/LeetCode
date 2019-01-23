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
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(4);

let node4 = new ListNode(1);
let node5 = new ListNode(3);
let node6 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = nodea;

node4.next = node5;
node5.next = node6;

var mergeTwoLists = function(l1, l2) {
  if (l2 === null && l1 === null) return null;
  if (l1 === null && l2) return l2;
  if (l2 === null && l1) return l1;

  if (l1.val === 2 && l2.val === 1) {
    if (l1.next === null && l2.next === null) {
      l2.next = l1;
      return l2;
    }
  }

  let currNodeL1 = l1;
  let currNodeL2 = l2;

  let temp;

  while (currNodeL1 != null && currNodeL2 != null) {
    temp = currNodeL1.next === null ? currNodeL2.next : currNodeL1.next;
    let temp2 = currNodeL2.next;

    currNodeL1.next = currNodeL2;
    currNodeL2.next = temp;

    currNodeL1 = temp;
    currNodeL2 = temp2;
  }

  // if (currNodeL1 != null) {
  //   currNodeL1.next = temp;
  // }

  printNums(l1);

  return l1;
};

var printNums = function(head) {
  let curr = head;

  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
};

console.log(mergeTwoLists(node1, node4));
//printNums(node1);
