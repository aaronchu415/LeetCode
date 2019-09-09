# // _NAME: Loop Detection (2.8)
# // _LINK: http://www.crackingthecodinginterview.com/
# // _CATEGORY: CTCI


class Node:

    def __init__(self, val):
        self.val = val
        self.next = None


def printLL(head):
    curr = head

    while curr:
        print(curr.val)
        curr = curr.next


def detectionLoop(head):

    if not head.next:
        return False

    if head.next == head:
        return head

    fast = head
    slow = head

    while fast and fast.next:

        fast = fast.next.next
        slow = slow.next

        if fast == slow:
            break

    if not fast or not fast.next:
        return False

    s = head

    while s is not fast:
        s = s.next
        fast = fast.next

    return fast


head = Node('A')
n1 = Node('B')
n2 = Node('C')
n3 = Node('D')
n4 = Node('E')
n5 = Node('F')
n6 = Node('G')

head.next = n1
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

n6.next = n2

print(detectionLoop(head).val)
