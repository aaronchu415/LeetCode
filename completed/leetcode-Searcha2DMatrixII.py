# // _NAME: Search a 2D Matrix II
# // _LINK: https://leetcode.com/problems/search-a-2d-matrix-ii/
# // _CATEGORY: 2d Array


class Solution:
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """

        if len(matrix) == 0:
            return False

        i = 0
        j = len(matrix[0])-1

        while i < len(matrix) and j >= 0:

            # if number is target then return true
            if matrix[i][j] == target:
                return True

            elif target < matrix[i][j]:
                # if target is less than matrix:
                # we know that we cant go down beacuse it will only increase
                j -= 1

            elif target > matrix[i][j]:
                # if target is greater than matrix:
                # we know we cant go left as that will onlly decrease
                i += 1

        return False
