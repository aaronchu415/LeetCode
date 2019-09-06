# // _NAME: Search a 2D Matrix
# // _LINK: https://leetcode.com/problems/search-a-2d-matrix/
# // _CATEGORY: 2d Array


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        i = 0
        j = 0

        def inThisRow():
            if i == len(matrix)-1:
                return True
            elif matrix[i+1][j] > target:
                return True
            else:
                return False

        while i < len(matrix) and j < len(matrix[i]):
            n = matrix[i][j]

            if n == target:
                return True

            # check to see if bottom is larger than target
            # if it is then the number is in this row
            if inThisRow():
                j += 1
            else:
                i += 1

        return False
