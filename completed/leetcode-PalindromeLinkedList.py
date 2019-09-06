# // _NAME: Palindrome Linked List
# // _LINK: https://leetcode.com/problems/palindrome-linked-list/
# // _CATEGORY: Linked List


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

from math import ceil, floor


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:

        if not head:
            return True

        if not head.next:
            return True

        def getTotalLength(node):
            c = 0
            while node != None:
                c += 1
                node = node.next

            return c

        def gotoSecond(node, idx):

            i = 0
            while i != idx:
                node = node.next
                i += 1

            return node

        def gotoFirst(node, idx):

            if idx == 0:
                node.next = None
                return node

            i = 0
            prev = None
            while i != idx:
                nn = node.next
                node.next = prev
                prev = node
                node = nn
                i += 1

            node.next = prev

            return node

        def walkforward(f, s):

            while f and s:
                if f.val != s.val:
                    return False
                f = f.next
                s = s.next

            return True

        total = getTotalLength(head)

        second_half_start = 0
        first_half_start = 0

        if total % 2 != 0:
            second_half_start = int(((total-1)/2) + 1)
            first_half_start = int(((total-1)/2) - 1)
        else:
            second_half_start = ceil((total-1)/2)
            first_half_start = floor((total-1)/2)

        second = gotoSecond(head, second_half_start)
        first = gotoFirst(head, first_half_start)

        # walk forward
        output = walkforward(first, second)

        return output
