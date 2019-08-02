// _NAME: Add Two Numbers
// _LINK: https://leetcode.com/problems/add-two-numbers/
// _CATEGORY: Array

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let a1 = []
  let a2 = []

  function extract(arr, head) {

    let curr = head;

    while (curr) {
      arr.push(curr.val)
      curr = curr.next
    }
  }

  function combine(arr1, arr2) {

    let output = []
    let i = arr1.length - 1
    let j = arr2.length - 1

    let remain = 0

    while (i >= 0 && j >= 0) {

      let sum = arr1[i] + arr2[j] + remain
      if (sum >= 10) {
        remain = 1;
        sum = sum % 10
      } else {
        remain = 0
      }
      output.push(sum)
      i--
      j--
    }

    while (i >= 0) {

      let sum = arr1[i] + remain
      if (sum >= 10) {
        remain = 1;
        sum = sum % 10
      } else {
        remain = 0
      }
      output.push(sum)
      i--
    }
    while (j >= 0) {

      let sum = arr2[j] + remain
      if (sum >= 10) {
        remain = 1;
        sum = sum % 10
      } else {
        remain = 0
      }
      output.push(sum)
      j--
    }

    if (remain === 1) {
      output.push(1)
    }

    return output
  }

  extract(a1, l1)
  extract(a2, l2)

  a1.reverse()
  a2.reverse()

  let num = combine(a1, a2)

  let d = new ListNode('d')
  let curr = d;
  let i = 0

  while (i < num.length) {
    curr.next = new ListNode(num[i])
    i++
    curr = curr.next
  }

  return d.next

};
