// _NAME: Remove Dups from an unsorted Linked List (2.1)
// _LINK: http://www.crackingthecodinginterview.com/
// _CATEGORY: CTCI

//Remove dups from an unsorted LL
// Write a removeDuplicates() function which takes a list and deletes any duplicate nodes from the list. The list is not sorted.

class Node {

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function remove(prev, next) {
  prev.next = next;
}

function print(head) {
  let curr = head;

  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

function removeDuplicates(head) {
  let prev = null;
  let seen = new Set();
  let curr = head;

  while (curr) {
    //if node in set then call remove
    if (seen.has(curr.val)) {
      remove(prev, curr.next)
      curr = curr.next;
    }
    else {
      seen.add(curr.val);
      prev = curr;
      curr = curr.next;
    }
  }
}

let head = new Node(12);
let n1 = new Node(11);
let n2 = new Node(12);
let n3 = new Node(21);
let n4 = new Node(41);
let n5 = new Node(43);
let n6 = new Node(21);

head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;


print(head);
console.log('------');
removeDuplicates(head);
print(head);
