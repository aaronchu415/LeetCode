# // _NAME: Sum of Even Numbers After Queries
# // _LINK: https://leetcode.com/problems/sum-of-even-numbers-after-queries/
# // _CATEGORY: Array


class Solution:
    def sumEvenAfterQueries(self, A: List[int], queries: List[List[int]]) -> List[int]:

        even_count = sum([n for n in A if n % 2 == 0])

        def performQuery(arr, n, idx):
            arr[idx] += n

        o = []

        for q in queries:
            n, idx = q
            prev = A[idx]
            curr = prev + n

            if curr % 2 == 0 and prev % 2 != 0:
                even_count += curr
            elif curr % 2 == 0 and prev % 2 == 0:
                even_count += n
            elif curr % 2 != 0 and prev % 2 == 0:
                even_count -= prev

            A[idx] = curr
            o.append(even_count)

        return o
