// _NAME: Delete Node in a Linked List
// _LINK: https://leetcode.com/problems/delete-node-in-a-linked-list/
// _CATEGORY: LinkedList

/**

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let node1 = new ListNode(4);
let node2 = new ListNode(5);
let node3 = new ListNode(1);
let node4 = new ListNode(9);
let node5 = new ListNode(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var deleteNode = function(node) {
  let curr = node;

  //while it is not the 2nd last node
  while (curr.next.next != null) {
    //console.log(curr.val);
    //replace current value with next value
    curr.val = curr.next.val;
    //move to next node

    curr = curr.next;
  }

  //this will now be the 2nd to last node

  //replace current value with next value
  curr.val = curr.next.val;
  //replace its next with null
  curr.next = null;
};

deleteNode(node4);

console.log(node4);
