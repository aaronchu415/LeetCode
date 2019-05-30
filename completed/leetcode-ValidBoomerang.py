# // _NAME: Valid Boomerang
# // _LINK: https://leetcode.com/problems/valid-boomerang/
# // _CATEGORY: Array

# A boomerang is a set of 3 points that are all distinct and not in a straight line.

# Given a list of three points in the plane, return whether these points are a boomerang.

# Input: [[1,1],[2,3],[3,2]]
# Output: true

# Input: [[1,1],[2,2],[3,3]]
# Output: false


class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:

        # edge case where there are dup points
        pointsAreUnique = len(set(["".join(map(str, p))
                                   for p in points])) == len(points)

        # if all x or why are the same then fail
        xIsAllEqual = len(set([p[0] for p in points])) == 1
        yIsAllEqual = len(set([p[1] for p in points])) == 1

        isDiagOneAndTwo = (points[0][0] - points[1][0]
                           ) == (points[0][1] - points[1][1])
        isDiagTwoAndThree = (points[1][0] - points[2]
                             [0]) == (points[1][1] - points[2][1])

        # check to see if they are a diag line
        isDiagLine = isDiagOneAndTwo and isDiagTwoAndThree

        # retur if not diag line, points are unique and x and y are all diff
        return not isDiagLine and pointsAreUnique and not xIsAllEqual and not yIsAllEqual
