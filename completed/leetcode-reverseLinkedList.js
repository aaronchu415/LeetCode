// _NAME: Reverse Linked List
// _LINK: https://leetcode.com/problems/reverse-linked-list/
// _CATEGORY: LinkedList

/**

Reverse a singly linked list.

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var reverseList = function(head) {
  //if input is empty then return null
  if (head === null) {
    return head;
  }

  //if input is just a single node, then return the single node
  if (head.next === null) {
    return head;
  }

  //get the second node
  let secondNode = head.next;

  //get starting point assign current node to the 3rd node
  let currNode = secondNode.next;
  //assign prev node to 2nd node
  let prevNode = secondNode;

  //assign head.next to point to null (reverse the pointers)
  head.next = null;
  //assign secondnode.next to point to head (reverse the pointers)
  secondNode.next = head;

  //if 3rd node is null then just return 2nd node and we are done
  if (currNode === null) {
    return secondNode;
  }

  //else run through the linked list and reverse pointers
  while (currNode.next != null) {
    let temp1 = currNode.next; //get the next node

    currNode.next = prevNode; //reverse the pointer

    prevNode = currNode; //prev node is pointing to the current node
    currNode = temp1; //current node is now pointing to the next node
  }

  // since the while loop will stop at the last node, we will have to reverse this
  // pointer too
  currNode.next = prevNode;

  return currNode;
};

console.log(reverseList(head));
