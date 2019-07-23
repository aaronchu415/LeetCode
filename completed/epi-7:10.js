// _NAME: Implement Even-Odd Linked List (7.10)
// _LINK: https://elementsofprogramminginterviews.com/
// _CATEGORY: EPI

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
var oddEvenList = function (head) {

  if (!head) return null
  if (!head.next) return head

  let c = head;
  let n = head.next
  let o = head
  let e = n;

  while (n) {
    c.next = n.next;
    c = n;
    n = n.next;
  }

  let lastOdd = getlastNode(o);
  lastOdd.next = e;

  return o;
};

var getlastNode = function (head) {

  let curr = head;

  while (curr.next) {
    curr = curr.next
  }
  return curr
}
